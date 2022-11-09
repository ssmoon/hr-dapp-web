import Career from '@/models/Career';
import { request } from 'ice';

export default {
  async createCareer(career: Career): Promise<void> {
    await request({
      url: '/career',
      method: 'post',
      data: career,
    });
  },
  async finishCareer(careerId: number): Promise<void> {
    await request({
      url: `/career/${careerId}/finish`,
      method: 'put',
    });
  },
};
