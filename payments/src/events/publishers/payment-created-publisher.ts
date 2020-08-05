import { Subjects, Publisher, PaymentCreatedEvent } from '@duynvh/common-micro-service';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
