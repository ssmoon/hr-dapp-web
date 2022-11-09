import ValidateResult from '@/models/ValidateResult';
import WorkerSummary from '@/models/WorkerSummary';
import { request } from 'ice';

export default {
  async createWorker(worker: WorkerSummary): Promise<void> {
    await request({
      url: '/worker',
      method: 'post',
      data: worker,
    });
  },
  async getSummary(): Promise<WorkerSummary[]> {
    const responseData = await request({
      url: '/worker/all',
      method: 'get',
    });
    return responseData;
  },
  async validateWorker(workerId: number): Promise<ValidateResult> {
    const responseData = await request({
      url: `/worker/validate?workerId=${workerId}`,
      method: 'post',
    });
    return responseData;
  },
};
