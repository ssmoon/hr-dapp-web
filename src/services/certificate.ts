import Certificate from '@/models/Certificate';
import { request } from 'ice';

export default {
  async createCertificate(certificate: Certificate): Promise<void> {
    await request({
      url: '/certificate',
      method: 'post',
      data: certificate,
    });
  },
};
