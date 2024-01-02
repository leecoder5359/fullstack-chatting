import { Users } from 'src/users/repository/entities/user.entity';
import { Workspace } from 'src/workspaces/repository/entities/workspace.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { ChannelChat } from './channel-chat.entity';
import { ChannelMember } from './channel-member.entity';

@Entity()
export class Channel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { name: 'name', length: 30 })
    name: string;

    @Column('tinyint', {
        name: 'private',
        nullable: true,
        width: 1,
        default: () => 0,
    })
    private: boolean | null;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @Column('int', { name: 'workspace_id', nullable: true })
    workspaceId: number | null;

    @OneToMany(() => ChannelChat, (channelChats) => channelChats.channel)
    channelChats: ChannelChat[];

    @OneToMany(
        () => ChannelMember,
        (channelMembers) => channelMembers.channel,
        {
            cascade: ['insert'],
        },
    )
    ChannelMembers: ChannelMember[];

    @ManyToMany(() => Users, (users) => users.channels)
    Members: Users[];

    @ManyToOne(() => Workspace, (workspaces) => workspaces.channels, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    })
    @JoinColumn([{ name: 'workspace_id', referencedColumnName: 'id' }])
    workspace: Workspace;
}
