import { gql } from 'apollo-server-express';
import Jobs from '../../models/Jobs';


export const typeDef = `

  input AddJobsInput {
    title: String!
  }
  
  input UpdateJobsInput{
    title: String!
    description: String
    request: String 
  }
  type JobsPayload {
    jobs: Jobs
  }
  type RemoveJobsPayload {
    jobs: Jobs
    removed: Boolean
  }
`;

export const resolvers = {
     addJobs: async (parent, { input }) => {
        const jobs = new Jobs(input);
        await jobs.save();
        return { jobs };
    },
    updateJobs: async (parent, { id, input}) => {
        const jobs = await Jobs.findByIdAndUpdate(id,input, {new:true})
        return { jobs };
    },
    removeJobs: async (parent, { id }) => {
        const jobs = await Jobs.findById(id);
        await Jobs.delete({ _id: id });
        return { jobs, removed: true };
    },
    restoreJobs: async (parent, { id }) =>{
      const jobs =  Jobs.findById(id)
      await Jobs.restore({ _id: id });
        return { jobs };
    },
};