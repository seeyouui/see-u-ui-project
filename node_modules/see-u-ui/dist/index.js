import { defineComponent, getCurrentInstance, ref, computed, createElementBlock, openBlock, normalizeClass, normalizeStyle, createElementVNode, createCommentVNode, renderSlot, toDisplayString, nextTick, unref, onMounted, onUnmounted, createBlock } from "vue";
const _hoisted_1 = ["hover-class", "disabled"];
const __default__$2 = {
  name: "SeeButton"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: {
    title: { default: "" },
    size: { default: "normal" },
    type: { default: "info" },
    color: { default: "" },
    textColor: { default: "" },
    isRipple: { type: Boolean, default: false },
    rippleTime: { default: 500 },
    maskTime: { default: 1e3 },
    isHollow: { type: Boolean, default: false },
    rippleColor: { default: "rgba(0, 0, 0, .15)" },
    rippleStyle: { default: null },
    customStyle: { default: null },
    hoverClass: { default: "" },
    border: { default: 1 },
    isDisabled: { type: Boolean, default: false },
    radius: { default: 4 }
  },
  emits: ["onTap"],
  setup(__props, { emit: __emit }) {
    let globalId = 0;
    const instance = getCurrentInstance();
    const props = __props;
    globalId++;
    const rippleTop = ref(0);
    const rippleLeft = ref(0);
    const active = ref(false);
    const field = ref({});
    const seeButtonId = "seeButton_" + globalId;
    let rippleUniqueId = 0;
    const rippleQueue = ref([]);
    const getHoverClass = computed(() => {
      if (props.isRipple) return "none";
      if (props.hoverClass) return props.hoverClass;
      if (props.isHollow) {
        return `button-hover-${props.type}-hollow`;
      }
      return `button-hover-${props.type}`;
    });
    const onTouchstart = (e) => {
      active.value = false;
      nextTick(() => activeWaves(e));
    };
    const activeWaves = (e) => {
      getClientRect().then((data) => {
        if (!data?.height) return;
        data.finalWidth = data.height > data.width ? data.height : data.width;
        if (!data.finalWidth) return;
        field.value = data;
        let touchesX;
        let touchesY;
        touchesX = e.changedTouches[0].clientX;
        touchesY = e.changedTouches[0].clientY;
        touchesX = e.detail.clientX;
        touchesY = e.detail.clientY;
        touchesX = e.touches[0].clientX;
        touchesY = e.touches[0].clientY;
        rippleTop.value = touchesY - data.top - data.finalWidth / 2;
        rippleLeft.value = touchesX - data.left - data.finalWidth / 2;
        nextTick(() => active.value = true);
        rippleQueue.value.push({
          id: rippleUniqueId++,
          x: touchesX - data.left - data.finalWidth / 2,
          y: touchesY - data.top - data.finalWidth / 2,
          size: data.finalWidth
        });
      });
    };
    const getClientRect = () => {
      return new Promise((resolve) => {
        const query = uni.createSelectorQuery().in(instance);
        const id = "#" + seeButtonId;
        query.select(id).boundingClientRect((data) => {
          resolve(data);
        }).exec();
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("view", {
        id: seeButtonId,
        style: normalizeStyle({ ...props.customStyle, borderRadius: props.radius + "px" }),
        class: normalizeClass(["see-button", [props.size]]),
        onClick: _cache[1] || (_cache[1] = ($event) => onTouchstart($event))
      }, [
        createElementVNode("view", {
          id: seeButtonId,
          style: normalizeStyle({ ...props.customStyle, borderRadius: props.radius + "px" }),
          class: normalizeClass(["see-button", [props.size]]),
          onTouchstart: _cache[0] || (_cache[0] = ($event) => onTouchstart($event))
        }, [
          createElementVNode("button", {
            style: normalizeStyle({
              ...props.customStyle,
              borderRadius: props.radius + "px",
              background: props.color
            }),
            class: normalizeClass(["see-botton-class", [
              props.size,
              props.isDisabled && `disabled-${props.type}`,
              props.isHollow ? `hollow-${props.type}` : props.type,
              `border-${props.type}-${props.border ?? 1}`
            ]]),
            "hover-class": getHoverClass.value,
            disabled: props.isDisabled
          }, [
            createElementVNode("text", {
              style: normalizeStyle({ color: props.textColor }),
              class: "title"
            }, toDisplayString(props.title), 5),
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ], 14, _hoisted_1),
          props.isRipple ? (openBlock(), createElementBlock("view", {
            key: 0,
            class: normalizeClass(["see-button-ripple", { active: active.value }]),
            style: normalizeStyle({
              ...props.rippleStyle,
              top: rippleTop.value + "px",
              left: rippleLeft.value + "px",
              width: field.value.finalWidth + "px",
              height: field.value.finalWidth + "px",
              "background-color": __props.rippleColor,
              "--ripple-time": props.rippleTime + "ms",
              "--mask-time": props.maskTime + "ms"
            })
          }, null, 6)) : createCommentVNode("", true)
        ], 38)
      ], 6);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const SeeButton = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-4971413c"]]);
const __default__$1 = {
  name: "SeeLink"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: {
    text: { default: "" },
    type: { default: "info" },
    color: { default: "" },
    href: { default: "" },
    isLine: { type: Boolean, default: false },
    lineColor: { default: "" },
    size: { default: 16 }
  },
  emits: ["onClick"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const getClass = computed(() => {
      const classes = [];
      if (!props.color) {
        classes.push(props.type);
      }
      if (props.isLine) {
        classes.push("href");
      }
      return classes.join(" ");
    });
    const getStyle = computed(() => {
      const style = {};
      if (props.color) {
        style.color = props.color;
      }
      if (props.isLine && props.lineColor) {
        style.borderBottomColor = props.lineColor;
      }
      style.fontSize = typeof props.size === "number" ? `${props.size}px` : props.size;
      return style;
    });
    const onClick = () => {
      emit("onClick");
      if (props.href ?? "") {
        plus.runtime.openURL(props.href);
        window.open(props.href);
        uni.setClipboardData({
          data: props.href,
          success: () => {
            uni.hideToast();
            nextTick(() => {
              uni.showToast({
                title: "链接已复制，请在浏览器打开",
                icon: "none"
              });
            });
          }
        });
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("text", {
        class: normalizeClass(getClass.value),
        style: normalizeStyle(getStyle.value),
        onClick
      }, toDisplayString(props.text), 7);
    };
  }
});
const SeeLink = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-39aa15b5"]]);
function normalizeDate$1(date) {
  if (date === null || date === void 0) return null;
  if (date instanceof Date) return date;
  if (typeof date === "number") return new Date(date);
  if (typeof date === "string") {
    if (/^\d+$/.test(date)) {
      return new Date(parseInt(date));
    }
    const safeDateStr = date.replace(/-/g, "/");
    return new Date(safeDateStr);
  }
  return null;
}
function formatDate(date, fmt = "YYYY-MM-DD HH:mm:ss", options = { placeholder: "" }) {
  const d = normalizeDate$1(date);
  if (!d || isNaN(d.getTime())) {
    return options.placeholder || "";
  }
  const o = {
    "M+": d.getMonth() + 1,
    // 月份
    "D+": d.getDate(),
    // 日
    "H+": d.getHours(),
    // 小时 (24小时制)
    "h+": d.getHours() % 12 === 0 ? 12 : d.getHours() % 12,
    // 小时 (12小时制)
    "m+": d.getMinutes(),
    // 分
    "s+": d.getSeconds(),
    // 秒
    "q+": Math.floor((d.getMonth() + 3) / 3),
    // 季度
    "S+": d.getMilliseconds()
    // 毫秒
  };
  if (/(Y+|y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  if (/(W+)/.test(fmt)) {
    const week = ["日", "一", "二", "三", "四", "五", "六"];
    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length > 1 ? RegExp.$1.length > 2 ? "星期" : "周" : "") + week[d.getDay()]);
  }
  for (const k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      const value = o[k].toString();
      if (k === "S+") {
        fmt = fmt.replace(RegExp.$1, ("000" + value).slice(-3));
      } else {
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? value : ("00" + value).substr(("" + value).length));
      }
    }
  }
  return fmt;
}
function useDateFormat(date, formatStr = "YYYY-MM-DD HH:mm:ss", options = { placeholder: "" }) {
  return computed(() => {
    return formatDate(unref(date), unref(formatStr), options);
  });
}
function normalizeDate(date) {
  if (!date) return null;
  if (date instanceof Date) return date;
  if (typeof date === "number") return new Date(date);
  if (typeof date === "string") {
    if (/^\d+$/.test(date)) return new Date(parseInt(date));
    return new Date(date.replace(/-/g, "/"));
  }
  return null;
}
function formatTimeAgo(date) {
  const d = normalizeDate(date);
  if (!d) return "";
  const now = Date.now();
  const diff = (now - d.getTime()) / 1e3;
  if (diff < 0) return "刚刚";
  if (diff < 60) {
    return Math.floor(diff) + "秒前";
  }
  if (diff < 3600) {
    return Math.floor(diff / 60) + "分钟前";
  }
  if (diff < 3600 * 24) {
    return Math.floor(diff / 3600) + "小时前";
  }
  if (diff < 3600 * 24 * 7) {
    return Math.floor(diff / (3600 * 24)) + "天前";
  }
  if (diff < 3600 * 24 * 30) {
    return Math.floor(diff / (3600 * 24 * 7)) + "周前";
  }
  if (diff < 3600 * 24 * 365) {
    return Math.floor(diff / (3600 * 24 * 30)) + "月前";
  }
  return Math.floor(diff / (3600 * 24 * 365)) + "年前";
}
function useTimeAgo(date, updateInterval = 3e4) {
  const tick = ref(0);
  let timer = null;
  const startTimer = () => {
    stopTimer();
    timer = setInterval(() => {
      tick.value++;
    }, updateInterval);
  };
  const stopTimer = () => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  };
  onMounted(() => startTimer());
  onUnmounted(() => stopTimer());
  return computed(() => {
    tick.value;
    return formatTimeAgo(unref(date));
  });
}
function toValueCompat(v) {
  return typeof v === "function" ? v() : v;
}
function truncateToDecimals(value, decimals) {
  const str = value.toString();
  const pointIndex = str.indexOf(".");
  if (pointIndex === -1) {
    return Number(str);
  }
  const truncatedStr = str.substring(0, pointIndex + 1 + decimals);
  return Number(truncatedStr);
}
function formatCurrency(value, options = {}) {
  const { decimals = 2, symbol = "", useGrouping = true } = options;
  const rawNum = Number(value);
  if (Number.isNaN(rawNum)) return "";
  const truncatedNum = truncateToDecimals(rawNum, decimals);
  const formatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping
    // 注意：不依赖 Intl 的 roundingMode，因为兼容性还不是 100% 全覆盖，
    // 手动截断最稳妥。
  });
  const formatted = formatter.format(truncatedNum);
  return symbol ? `${symbol}${formatted}` : formatted;
}
function useCurrencyFormat(amount, options = {}) {
  const { placeholder = "-" } = options;
  return computed(() => {
    const val = toValueCompat(amount);
    if (val === null || val === void 0 || val === "") {
      return placeholder;
    }
    const res = formatCurrency(val, options);
    return res === "" ? placeholder : res;
  });
}
const __default__ = {
  name: "SeeText"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    text: { default: "" },
    type: { default: "info" },
    mode: { default: "text" },
    color: { default: "" },
    href: { default: "" },
    phoneNumber: { default: "" },
    date: { default: "" },
    dateFormat: { default: "YYYY-MM-DD" },
    size: { default: 16 }
  },
  emits: ["onClick"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const getClass = computed(() => {
      return props.color ? "" : props.type;
    });
    const getStyle = computed(() => {
      return {
        color: props.color,
        fontSize: typeof props.size === "number" ? `${props.size}px` : props.size
      };
    });
    const onClick = () => {
      emit("onClick");
      if (props.mode === "phone") {
        uni.makePhoneCall({
          phoneNumber: props.phoneNumber
        });
        uni.showToast({
          title: "H5不支持，请使用小程序或APP点击",
          icon: "none"
        });
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("view", {
        class: "see-text",
        onClick
      }, [
        props.mode === "text" ? (openBlock(), createElementBlock("text", {
          key: 0,
          class: normalizeClass(getClass.value),
          style: normalizeStyle(getStyle.value)
        }, toDisplayString(props.text), 7)) : createCommentVNode("", true),
        props.mode === "link" ? (openBlock(), createBlock(SeeLink, {
          key: 1,
          text: props.text,
          type: props.type,
          href: props.href,
          size: props.size
        }, null, 8, ["text", "type", "href", "size"])) : createCommentVNode("", true),
        props.mode === "phone" ? (openBlock(), createElementBlock("text", {
          key: 2,
          class: normalizeClass(getClass.value),
          style: normalizeStyle(getStyle.value)
        }, toDisplayString(props.text), 7)) : createCommentVNode("", true),
        props.mode === "price" ? (openBlock(), createElementBlock("text", {
          key: 3,
          class: normalizeClass(getClass.value),
          style: normalizeStyle(getStyle.value)
        }, toDisplayString(unref(formatCurrency)(props.text)), 7)) : createCommentVNode("", true),
        props.mode === "date" ? (openBlock(), createElementBlock("text", {
          key: 4,
          class: normalizeClass(getClass.value),
          style: normalizeStyle(getStyle.value)
        }, toDisplayString(unref(formatDate)(props.date, props.dateFormat)), 7)) : createCommentVNode("", true),
        props.mode === "timeago" ? (openBlock(), createElementBlock("text", {
          key: 5,
          class: normalizeClass(getClass.value),
          style: normalizeStyle(getStyle.value)
        }, toDisplayString(unref(formatTimeAgo)(props.date)), 7)) : createCommentVNode("", true)
      ]);
    };
  }
});
const SeeText = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-97cd08f1"]]);
const components = [
  SeeButton,
  SeeText,
  SeeLink
];
const install = (app) => {
  components.forEach((component) => {
    if (component.name) {
      app.component(component.name, component);
    } else {
      console.warn("SeeYouUI: 组件缺少 name 属性，无法自动注册", component);
    }
  });
};
const index = {
  install
};
export {
  SeeButton,
  SeeLink,
  SeeText,
  index as default,
  formatCurrency,
  formatDate,
  formatTimeAgo,
  useCurrencyFormat,
  useDateFormat,
  useTimeAgo
};
