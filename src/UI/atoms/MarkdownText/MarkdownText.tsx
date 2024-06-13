import { ReactNode } from 'react';

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import classes from './MarkdownText.module.scss';

interface IProps {
  markdown: string;
}

function Paragraph({ children }: { children: ReactNode }) {
  return <p className={classes.markdown__paragraph}>{children}</p>;
}
function Heading1({ children }: { children: ReactNode }) {
  return <h1 className={classes.markdown__headingOne}>{children}</h1>;
}
function Heading2({ children }: { children: ReactNode }) {
  return <h2 className={classes.markdown__headingTwo}>{children}</h2>;
}
function Heading3({ children }: { children: ReactNode }) {
  return <h3 className={classes.markdown__headingTree}>{children}</h3>;
}
function ListItem({ children }: { children: ReactNode }) {
  return <li className={classes.markdown__list}>{children}</li>;
}
function UnorderedList({ children }: { children: ReactNode }) {
  return <ul className={classes.markdown__listUl}>{children}</ul>;
}
function OrderedList({ children }: { children: ReactNode }) {
  return <ol className={classes.markdown__listOl}>{children}</ol>;
}
function Emphasis({ children }: { children: ReactNode }) {
  return <em className={classes.markdown__em}>{children}</em>;
}
function Strong({ children }: { children: ReactNode }) {
  return <strong className={classes.markdown__strong}>{children}</strong>;
}
function Select({ children }: { children: ReactNode }) {
  return <select className={classes.markdown__select}>{children}</select>;
}

const components = {
  p: ({ children }: { children?: ReactNode }) => (
    <Paragraph>{children}</Paragraph>
  ),
  h1: ({ children }: { children?: ReactNode }) => (
    <Heading1>{children}</Heading1>
  ),
  h2: ({ children }: { children?: ReactNode }) => (
    <Heading2>{children}</Heading2>
  ),
  h3: ({ children }: { children?: ReactNode }) => (
    <Heading3>{children}</Heading3>
  ),
  ul: ({ children }: { children?: ReactNode }) => (
    <UnorderedList>{children}</UnorderedList>
  ),
  ol: ({ children }: { children?: ReactNode }) => (
    <OrderedList>{children}</OrderedList>
  ),
  li: ({ children }: { children?: ReactNode }) => (
    <ListItem>{children}</ListItem>
  ),
  em: ({ children }: { children?: ReactNode }) => (
    <Emphasis>{children}</Emphasis>
  ),
  strong: ({ children }: { children?: ReactNode }) => (
    <Strong>{children}</Strong>
  ),
  select: ({ children }: { children?: ReactNode }) => (
    <Select>{children}</Select>
  ),
};

export function MarkdownText({ markdown }: IProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={components}
    >
      {markdown}
    </ReactMarkdown>
  );
}
