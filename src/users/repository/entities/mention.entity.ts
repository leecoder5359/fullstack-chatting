import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Category } from './enums/category.enum';
import { Workspace } from 'src/workspaces/repository/entities/workspace.entity';
import { Users } from './user.entity';

@Entity()
export class Mention {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('enum', { enum: Category })
    category: Category;

    @Column('int', { name: 'chat_id', nullable: true })
    chatId: number | null;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @Column('int', { name: 'workspace_id', nullable: true })
    workspaceId: number | null;

    @Column('int', { name: 'sender_id', nullable: true })
    senderId: number | null;

    @Column('int', { name: 'receiver_id', nullable: true })
    receiverId: number | null;

    @ManyToOne(() => Workspace, (workspaces) => workspaces.mentions, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    })
    @JoinColumn([{ name: 'workspace_id', referencedColumnName: 'id' }])
    workspace: Workspace;

    @ManyToOne(() => Users, (users) => users.mentions, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    })
    @JoinColumn([{ name: 'sender_id', referencedColumnName: 'id' }])
    sender: Users;

    @ManyToOne(() => Users, (users) => users.mentions2, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    })
    @JoinColumn([{ name: 'receiver_id', referencedColumnName: 'id' }])
    receiver: Users;
}
