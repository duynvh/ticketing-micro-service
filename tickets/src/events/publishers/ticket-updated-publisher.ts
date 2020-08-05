import { Publisher, Subjects, TicketUpdatedEvent } from '@duynvh/common-micro-service';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
