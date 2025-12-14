import { ComputedRef, MaybeRef } from 'vue';
type DateInput = string | number | Date | null | undefined;
/**
 * 核心：计算“多久之前”
 * @param date 目标时间
 * @returns 格式化后的字符串 (如 "1分钟前")
 */
export declare function formatTimeAgo(date: DateInput): string;
/**
 * 响应式“多久之前”
 * @param date 目标时间
 * @param updateInterval 自动刷新间隔(毫秒)，默认 30秒
 */
export declare function useTimeAgo(date: MaybeRef<DateInput>, updateInterval?: number): ComputedRef<string>;
export {};
