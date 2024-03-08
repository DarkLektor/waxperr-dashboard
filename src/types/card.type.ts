import {IconLinkType} from "@/types/icon-link.type.ts";

export interface CardType {
    title: string
    subtitle: string
    textClass?: string
    icon?: string
    label?: string
    isLongCard?: boolean
    iconLinks?: IconLinkType[]
    time?: string
    image?: string
    longCardItems?: {
        title: string
        subtitle: string
    }[]
}
