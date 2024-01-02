import { Users } from 'src/users/repository/entities/user.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Channel } from './channel.entity';

@Entity()
export class ChannelChat {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;

    @Column('text')
    content: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @Column('int', { name: 'user_id', nullable: true })
    userId: number | null;

    @Column('int', { name: 'channel_id', nullable: true })
    channelId: number | null;

    @ManyToOne(() => Users, (users) => users.channelChats, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    })
    @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
    user: Users;

    @ManyToOne(() => Channel, (channels) => channels.channelChats, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    })
    @JoinColumn([{ name: 'channel_id', referencedColumnName: 'id' }])
    channel: Channel;
}
