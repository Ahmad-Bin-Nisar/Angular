export interface TodoItem {
    id: number;
    description: string;
    priority: number;
    status: 'active' | 'completed';
    expiryDate: Date;
    editMode?: boolean;
    editedDescription?: string;
  }
  