import { Channel, channel } from 'diagnostics_channel';
import { ChannelChat } from 'src/channels/repository/entities/channel-chat.entity';
import { ChannelMember } from 'src/channels/repository/entities/channel-member.entity';
import { Dm } from 'src/dms/repository/entities/dm.entity';
import { WorkspaceMember } from 'src/workspaces/repository/entities/workspace-member.entity';
import { Workspace } from 'src/workspaces/repository/entities/workspace.entity';
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    Index,
    JoinTable,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Mention } from './mention.entity';

@Index('email', ['email'], { unique: true })
@Entity()
export class Users {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;

    @Column('varchar', { name: 'email', unique: true, length: 30 })
    email: string;

    @Column('varchar', { name: 'nickname', length: 30 })
    nickname: string;

    @Column('varchar', { name: 'password', length: 100, select: false })
    password: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date | null;

    @OneToMany(() => ChannelChat, (channelChats) => channelChats.user)
    channelChats: ChannelChat[];

    @OneToMany(() => ChannelMember, (channelMembers) => channelMembers.user)
    channelMembers: ChannelMember[];

    @OneToMany(() => Dm, (dms) => dms.sender)
    dms: Dm[];

    @OneToMany(() => Dm, (dms) => dms.receiver)
    dms2: Dm[];

    @OneToMany(() => Mention, (mentions) => mentions.sender)
    mentions: Mention[];

    @OneToMany(() => Mention, (mentions) => mentions.receiver)
    mentions2: Mention[];

    @OneToMany(
        () => WorkspaceMember,
        (workspaceMembers) => workspaceMembers.user,
    )
    workspaceMembers: WorkspaceMember[];

    @ManyToMany(() => Workspace, (workspaces) => workspaces.members)
    @JoinTable({
        name: 'workspacemembers',
        joinColumn: {
            name: 'user_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'workspace_id',
            referencedColumnName: 'id',
        },
    })
    workspaces: Workspace[];

    @ManyToMany(() => Channel, (channels) => channels.members)
    @JoinTable({
        name: 'channelmembers',
        joinColumn: {
            name: 'user_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'channel_id',
            referencedColumnName: 'id',
        },
    })
    channels: Channel[];
}
