import { cachorro } from "./cachorro.model";

export interface horario {
  id: string;
  tutor: string;
  cachorros: cachorro[];              // Referência direta aos pets selecionados
  data: string;
  horario: string;
  valorTotal: number;
}
