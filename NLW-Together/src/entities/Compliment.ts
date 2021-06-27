import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, JoinColumn, ManyToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Tag } from "./Tag";
import { User } from "./User";

@Entity("compliments")
class Compliment {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_sender: string;

    @JoinColumn({ name: "user_sender" })
    @ManyToMany(() => User)
    userSender: User;

    @Column()
    user_receiver: string;

    @JoinColumn({ name: "user_receiver" })
    @ManyToMany(() => User)
    userReceiver: User;

    @Column()
    tag_id: string;

    @JoinColumn({ name: "tag_id" })
    @ManyToMany(() => Tag)
    tag: Tag;

    @Column()
    message: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Compliment }