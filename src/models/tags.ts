export interface TagResult{
    result: Tag[]
}

export interface Tag{
    confidence: number
    tag: TagTranslation
}

interface TagTranslation {
    en: string
}

export interface TagParam {
    url: string;
    max: number
}
