import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, UpdateDateColumn } from 'typeorm';
import { Channel } from './channel.entity';
import { Users } from 'src/users/repository/entities/user.entity';

@Entity()
export class ChannelMember {
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @Column('int', { name: 'user_id', primary: true })
    userId: number;

    @Column('int', { name: 'channel_id', primary: true })
    channelId: number;

    @ManyToOne(() => Channel, (channels) => channels.ChannelMembers, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    @JoinColumn([{ name: 'channel_id', referencedColumnName: 'id' }])
    channel: Channel;

    @ManyToOne(() => Users, (users) => users.channelMembers, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    @JoinColumn([{ name: 'UserId', referencedColumnName: 'id' }])
    user: Users;
}
