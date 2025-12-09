/**
 * Button 按钮
 * @description 此组件基于uniapp官方button，进行二次封装
 * @tutorial http://113.44.242.235:9000/components/button/
 *
 * @property {String}												title			标题
 * @property {"normal" | "large" | "small" | "mini"}				size			大小（默认normal）
 * @property {"info" | "primary" | "error" | "warning" | "success"}	type			按钮的预置样式，info，primary，error，warning，success (默认 'info' )
 * @property {Style}												color			按钮颜色(默认空，会覆盖type的颜色)
 * @property {Style}												textColor		标题颜色
 * @property {Boolean}												isRipple		是否启用水波纹（默认false）
 * @property {Number}												rippleTime		水波纹持续时间（默认500ms）
 * @property {Number}												maskTime		遮罩层持续时间（默认1000ms，建议为rippleTime的2倍）
 * @property {String}												rippleColor		水波纹颜色（默认rgba(0, 0, 0, .15)）
 * @property {Object}												rippleStyle		水波纹样式
 * @property {Object}												customStyle		按钮样式
 * @property {String | NULL}										hoverClass		点击按钮时样式
 * @property {1 | 0}												border			按钮边框（默认1，为0时无边框）
 * @property {Boolean}												isDisabled		是否禁用状态
 * @property {Number}												radius			圆角（默认4px）
 *
 * @example
 */
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    title?: string;
    size?: "normal" | "large" | "small" | "mini";
    type?: "info" | "primary" | "error" | "warning" | "success";
    color?: string;
    textColor?: string;
    isRipple?: boolean;
    rippleTime?: number;
    maskTime?: number;
    isHollow?: boolean;
    rippleColor?: string;
    rippleStyle?: Record<string, any> | null;
    customStyle?: Record<string, any> | null;
    hoverClass?: string | null;
    border?: 1 | 0;
    isDisabled?: boolean;
    radius?: number;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    onTap: () => any;
}, string, import('vue').PublicProps, Readonly<{
    title?: string;
    size?: "normal" | "large" | "small" | "mini";
    type?: "info" | "primary" | "error" | "warning" | "success";
    color?: string;
    textColor?: string;
    isRipple?: boolean;
    rippleTime?: number;
    maskTime?: number;
    isHollow?: boolean;
    rippleColor?: string;
    rippleStyle?: Record<string, any> | null;
    customStyle?: Record<string, any> | null;
    hoverClass?: string | null;
    border?: 1 | 0;
    isDisabled?: boolean;
    radius?: number;
}> & Readonly<{
    onOnTap?: () => any;
}>, {
    title: string;
    size: "normal" | "large" | "small" | "mini";
    type: "info" | "primary" | "error" | "warning" | "success";
    color: string;
    textColor: string;
    isRipple: boolean;
    rippleTime: number;
    maskTime: number;
    isHollow: boolean;
    rippleColor: string;
    rippleStyle: Record<string, any> | null;
    customStyle: Record<string, any> | null;
    hoverClass: string | null;
    border: 1 | 0;
    isDisabled: boolean;
    radius: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
