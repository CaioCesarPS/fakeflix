import { DomainException } from "./domain.exception";

export class VideoNotFoundException extends DomainException {
  constructor(message: string) {
    super(message);
  }
}