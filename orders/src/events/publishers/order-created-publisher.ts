import { Publisher, OrderCreatedEvent, Subjects } from '@duynvh/common-micro-service';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
