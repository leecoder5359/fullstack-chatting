import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    UpdateDateColumn,
} from 'typeorm';
import { Workspace } from './workspace.entity';
import { Users } from 'src/users/repository/entities/user.entity';

@Entity()
export class WorkspaceMember {
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @Column('int', { primary: true, name: 'workspace_id' })
    workspaceId: number;

    @Column('int', { primary: true, name: 'user_id' })
    userId: number;

    @Column('datetime', { name: 'logged_in_at', nullable: true })
    loggedInAt: Date | null;

    @ManyToOne(() => Workspace, (workspaces) => workspaces.workspaceMembers, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    @JoinColumn([{ name: 'workspace_id', referencedColumnName: 'id' }])
    workspace: Workspace;

    @ManyToOne(() => Users, (users) => users.workspaceMembers, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
    user: Users;
}
