import {
    User,
    Posts,
    StatusPost,
    TimeWorking,
    SalaryInformation,
    WorkLocation,
    Hashtag
} from '@prisma/client';

export interface RequestBodyCreatePost {
    jobName: Posts['job_name'];
    jobRequirement?: Posts['job_requirement'];
    quantity?: Posts['quantity'];
    status?: StatusPost;
    timeWorking?: Array<TimeWorking['content']>;
    salaryInformation?: Array<SalaryInformation['content']>;
    workLocations?: Array<WorkLocation['content']>;
    hashtags?: Array<Hashtag['content']>;
    userId: User['user_id'];
    // contact: Array<Contact['content']>;
}
