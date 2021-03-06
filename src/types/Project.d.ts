export interface Project {
  id: number;
  name: string;
  description: string;
  type: string;
  code: string;
  preview: string;
  image: string;
  tech_stack: string[];
  tags: string[];
  finished: boolean;
}
