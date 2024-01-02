import { Users } from 'src/users/repository/entities/user.entity';
import { Workspace } from 'src/workspaces/repository/entities/workspace.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Dm {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    content: string;

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

    @ManyToOne(() => Workspace, (workspaces) => workspaces.dms, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    })
    @JoinColumn([{ name: 'workspace_id', referencedColumnName: 'id' }])
    workspace: Workspace;

    @ManyToOne(() => Users, (users) => users.dms, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    })
    @JoinColumn([{ name: 'sender_id', referencedColumnName: 'id' }])
    sender: Users;

    @ManyToOne(() => Users, (users) => users.dms2, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    })
    @JoinColumn([{ name: 'receiver_id', referencedColumnName: 'id' }])
    receiver: Users;
}
