import WorkerSummary from './WorkerSummary';
import Certificate from './Certificate';
import Career from './Career';

export default interface WorkerDetail {
  general: WorkerSummary;
  careerPeriods: Career[];
  certificates: Certificate[];
}

