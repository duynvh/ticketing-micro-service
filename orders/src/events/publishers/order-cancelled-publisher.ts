import { Subjects, Publisher, OrderCancelledEvent } from '@duynvh/common-micro-service';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
