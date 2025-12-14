/**
 * Link 链接
 * @description 暂无说明
 * @tutorial https://www.seeuui.cn/components/link/
 *
 * @property {String | Number}										text			内容
 * @property {"info" | "primary" | "error" | "warning" | "success"}	type			文本的预置样式，info，primary，error，warning，success (默认 'info' )
 * @property {String}												color			自定义文本颜色（填写此值时，type失效。）
 * @property {String}												href			超链接
 * @property {Boolean}												isLine			是否添加下划线（默认false）
 * @property {String}												lineColor		下划线颜色（填写此字段后type失效）
 * @property {String | Number}										size			字体大小（px），默认16
 * @example
 */
declare const _default: import('vue').DefineComponent<{
    text?: string | number;
    type?: "info" | "primary" | "error" | "warning" | "success";
    color?: string;
    href?: string;
    isLine?: boolean;
    lineColor?: string;
    size: string | number;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    onClick: (...args: never) => any;
}, string, import('vue').PublicProps, Readonly<{
    text?: string | number;
    type?: "info" | "primary" | "error" | "warning" | "success";
    color?: string;
    href?: string;
    isLine?: boolean;
    lineColor?: string;
    size: string | number;
}> & Readonly<{
    onOnClick?: (...args: never) => any;
}>, {
    size: string | number;
    type: "info" | "primary" | "error" | "warning" | "success";
    color: string;
    text: string | number;
    href: string;
    isLine: boolean;
    lineColor: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, SVGTextElement>;
export default _default;
