import { ComputedRef, MaybeRef } from 'vue';
type DateInput = string | number | Date | null | undefined;
/**
 * 格式化配置选项
 */
export interface DateFormatOptions {
    /** 默认显示的占位符，当日期无效时显示 */
    placeholder?: string;
}
/**
 * 核心格式化函数
 * @param date 输入的日期
 * @param fmt 格式化字符串 (默认: YYYY-MM-DD HH:mm:ss)
 * @param options 配置项
 */
export declare function formatDate(date: DateInput, fmt?: string, options?: DateFormatOptions): string;
/**
 * Vue 3 组合式函数: 响应式日期格式化
 * @param date 响应式日期或普通日期
 * @param formatStr 格式化字符串 (可选，支持响应式)
 * @param options 配置项 (可选)
 * @returns ComputedRef<string>
 */
export declare function useDateFormat(date: MaybeRef<DateInput>, formatStr?: MaybeRef<string>, options?: DateFormatOptions): ComputedRef<string>;
export {};
