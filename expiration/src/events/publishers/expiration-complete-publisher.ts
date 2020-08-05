import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@duynvh/common-micro-service';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
