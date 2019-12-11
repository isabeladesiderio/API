import Proccess from '../../models/Proccess';
import Jobs from '../../models/Jobs';


export const typeDef = `
  
  input AddProccessInput {
    name: String!
    jobs: [ID]!
  }
  
  input UpdateProccessInput{
    name: String!
    maturity: String
    jobs : [ID]!
  }
  type ProccessPayload {
    proccess: Proccess
  }
  type RemoveProccessPayload {
    proccess: Proccess
    removed: Boolean
  }
`;

export const resolvers = {
    addProccess: async (parent, { input }) => {
    const jobs = await Jobs.find({_id:{$in:input.jobs}})
    const proccess = new Proccess(input);
    await proccess.save();
    proccess.jobs = jobs;
    return { proccess };
  },
  updateProccess: async (parent, { id, input }) => {
    const jobs = await Jobs.find({_id:{$in:input.jobs}})
    const proccess = await Proccess.findByIdAndUpdate(id, input, { new: true })
    proccess.jobs = jobs;
    return { proccess };
  },
  removeProccess: async (parent, { id }) => {
    const proccess = await Proccess.findById(id);
    await proccess.delete({ _id: id });
    return { proccess, removed: true };
  },
  restoreProccess: async (parent, { id }) => {
    const proccess = Proccess.findById(id)
    await Proccess.restore({ _id: id });
    const jobs = await Jobs.find({_id:{$in:proccess.jobs}})
    proccess.jobs = jobs;
    return { proccess };
  },
};