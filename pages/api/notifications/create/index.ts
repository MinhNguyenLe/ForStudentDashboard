import prismaClientV1 from 'backend/prisma-client';
import { Notification, Posts, Review, User } from '@prisma/client';

interface CreateNotification {
    content: Notification['content'];
    from: Notification['from'];
    targetId: Posts['post_id'] | Review['review_id'];
    userIds: Array<User['user_id']>;
}

export const createNotification = ({
    content,
    from,
    userIds,
    targetId
}: CreateNotification) => {
    const dataByUser = userIds.map((userId) => {
        const targetData =
            from === 'POST'
                ? {
                      post: {
                          connect: {
                              post_id: targetId
                          }
                      }
                  }
                : {
                      review: {
                          connect: {
                              review_id: targetId
                          }
                      }
                  };

        return {
            user_and_notification: {
                create: {
                    user: {
                        connect: {
                            user_id: userId
                        }
                    }
                }
            },
            content,
            from,
            ...targetData
        };
    });

    prismaClientV1.notification
        .createMany({
            data: dataByUser
        })
        .then((results) => {
            console.log(results);
            //TODO: connect web socket and notice for list users by list userIds
        })
        .catch((error) => {
            console.log(error);
        });
};
