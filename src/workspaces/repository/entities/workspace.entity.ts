import { Dm } from 'src/dms/repository/entities/dm.entity';
import { Channel } from '../../../channels/repository/entities/channel.entity';
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    JoinColumn,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Mention } from 'src/users/repository/entities/mention.entity';
import { WorkspaceMember } from './workspace-member.entity';
import { Users } from 'src/users/repository/entities/user.entity';

@Entity()
export class Workspace {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { unique: true, length: 30 })
    name: string;

    @Column('varchar', { unique: true, length: 30 })
    url: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date | null;

    @Column('int', { name: 'owner_id', nullable: true })
    ownerId: number | null;

    @OneToMany(() => Channel, (channels) => channels.workspace)
    channels: Channel[];

    @OneToMany(() => Dm, (dms) => dms.workspace)
    dms: Dm[];

    @OneToMany(() => Mention, (mentions) => mentions.workspace)
    mentions: Mention[];

    @OneToMany(
        () => WorkspaceMember,
        (workspaceMembers) => workspaceMembers.workspace,
        {
            cascade: true,
        },
    )
    workspaceMembers: WorkspaceMember[];

    @ManyToOne(() => Users, (users) => users.workspaces, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    })
    @JoinColumn([{ name: 'owner_id', referencedColumnName: 'id' }])
    owner: Users;

    @ManyToMany(() => Users, (users) => users.workspaces)
    members: Users[];
}
