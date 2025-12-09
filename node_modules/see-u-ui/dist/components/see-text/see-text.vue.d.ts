/**
 * Text 文本
 * @description 此组件基于uniapp官方button，进行二次封装
 * @tutorial http://113.44.242.235:9000/components/text/
 *
 * @property {String | Number}														text			内容
 * @property {"text" | "link" | "phone" | "date" | "timeago" | "price"}		mode			文本处理的匹配模式text-普通文本，price-价格，phone-手机号，name-姓名，date-日期，link-链接（默认 'text'）
 * @property {"info" | "primary" | "error" | "warning" | "success"}			type			文本的预置样式，info，primary，error，warning，success (默认 'info' )
 * @property {String}														color			自定义文本颜色（填写此值时，type失效。）
 * @property {String}														href			超链接
 * @property {String}														phoneNumber		手机号
 * @property {String | Number | Date}										date			日期（时间戳格式）
 * @property {String}														dateFormat		日期格式（默认'YYYY-MM-DD'）
 *
 * @example
 */
declare const _default: import('vue').DefineComponent<{
    text?: string | number;
    type?: "info" | "primary" | "error" | "warning" | "success";
    mode?: "text" | "link" | "phone" | "date" | "timeago" | "price";
    color?: string;
    href?: string;
    phoneNumber?: string;
    date?: string | number | Date;
    dateFormat?: string;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    onClick: (...args: never) => any;
}, string, import('vue').PublicProps, Readonly<{
    text?: string | number;
    type?: "info" | "primary" | "error" | "warning" | "success";
    mode?: "text" | "link" | "phone" | "date" | "timeago" | "price";
    color?: string;
    href?: string;
    phoneNumber?: string;
    date?: string | number | Date;
    dateFormat?: string;
}> & Readonly<{
    onOnClick?: (...args: never) => any;
}>, {
    type: "info" | "primary" | "error" | "warning" | "success";
    color: string;
    text: string | number;
    href: string;
    mode: "text" | "link" | "phone" | "date" | "timeago" | "price";
    phoneNumber: string;
    date: string | number | Date;
    dateFormat: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, SVGViewElement>;
export default _default;
