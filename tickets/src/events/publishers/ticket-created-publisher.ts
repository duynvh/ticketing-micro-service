import { Publisher, Subjects, TicketCreatedEvent } from '@duynvh/common-micro-service';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
