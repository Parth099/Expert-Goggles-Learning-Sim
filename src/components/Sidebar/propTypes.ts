import { TextDescription } from "../../DataResources/static";

export interface StaticProps {
    viz: string;
}

export interface QandAProps {
    viz: string;
}

export interface ToggleableTextProps {
    text: TextDescription[];
}

export interface ArticleProps extends StaticProps {
    articleId: string;
}
