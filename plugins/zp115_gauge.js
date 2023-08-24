import React from "react"

function render(ref) {
    return <canvas/>
}

function init(ref) {
    ref.exc('load(["https://z.zccdn.cn/vendor/gauge.2.1.7.js"])', {}, () => {
        ref.container.firstChild ? ini(ref) : setTimeout(() => ref.container.firstChild ? ini(ref) : null, 99)
    })
}

function ini(ref) {
    const { exc, props, container, ctx } = ref
    let o = { width: 200, height: 200, ...props, renderTo: container.firstChild }
    const gauge = container.gauge = new(o.type == "linear" ? LinearGauge : RadialGauge)(o)
    gauge.draw()
    exc('$v["gauge" + ref.id] = gauge', { ref, gauge })
    if (o.on) {
        if (o.on.animate) {
            gauge.on("animate", function(percent, value) {
                exc(o.on.animate, { ...ctx, $el: container, gauge, percent, value })
            })
        } else if (o.on.animationStart) {
            gauge.on("animationStart", function() {
                exc(o.on.animationStart, { ...ctx, $el: container, gauge })
            })
        }
    }
}

function destroy({ container }) {
    if (container) container.gauge.destroy()
}

$plugin({
    id: "zp115",
    props: [{
        prop: "type",
        type: "select",
        label: "表盘类型",
        items: [
            ["radial", "linear"],
            ["圆形", "线形"]
        ],
        default: "radial"
    }, {
        prop: "width",
        type: "number",
        label: "宽度(px)",
        default: "200"
    }, {
        prop: "height",
        type: "number",
        label: "高度(px)",
        default: "200"
    }, {
        prop: "title",
        type: "text",
        label: "标题",
        ph: "速度"
    }, {
        prop: "units",
        type: "text",
        label: "单位",
        ph: "Km/h"
    }, {
        prop: "valueBox",
        type: "switch",
        label: "显示数值框",
        default: true,
    }, {
        prop: "valueText",
        type: "text",
        label: "数值框内的静态文本",
        ph: "填写后将不显示当前值"
    }, {
        prop: "valueBoxWidth",
        type: "number",
        label: "数值框宽度",
        ph: "2"
    }, {
        prop: "valueBoxStroke",
        type: "number",
        label: "数值框的边框宽度",
        ph: "2"
    }, {
        prop: "valueBoxBorderRadius",
        type: "number",
        label: "数值框圆角半径",
        ph: "2"
    }, {
        prop: "valueInt",
        type: "number",
        label: "数值整数位数",
        ph: "2"
    }, {
        prop: "valueDec",
        type: "number",
        label: "数值小数位数",
        ph: "2"
    }, {
        prop: "valueText",
        type: "text",
        label: "数值框内的静态文本",
        ph: "填写后将不显示当前值"
    }, {
        prop: "valueTextShadow",
        type: "switch",
        label: "数值框的文本阴影"
    }, {
        prop: "majorTicks",
        type: "text",
        label: "主刻度数组",
        ph: "($obj.majorTicks)"
    }, {
        prop: "minorTicks",
        type: "number",
        label: "次刻度数量/次刻度步长",
        ph: "5"
    }, {
        prop: "exactTicks",
        type: "switch",
        label: "准确渲染主次刻度"
    }, {
        prop: "numbersMargin",
        type: "number",
        label: "刻度数值边距",
        ph: "25"
    }, {
        prop: "highlights",
        type: "text",
        label: "刻度颜色分区数组",
        ph: '([{"from": 0,"to": 50,"color": "red"}])'
    }, {
        prop: "highlightsWidth",
        type: "number",
        label: "刻度颜色分区宽度",
        ph: "25"
    }, {
        prop: "strokeTicks",
        type: "switch",
        label: "显示刻度框",
        default: true,
    }, {
        prop: "minValue",
        type: "number",
        label: "最小值",
        ph: "-100"
    }, {
        prop: "maxValue",
        type: "number",
        label: "最大值",
        ph: "100"
    }, {
        prop: "value",
        type: "number",
        label: "初始值",
        ph: "30"
    }, {
        prop: "borders",
        type: "switch",
        label: "显示表盘边框",
        default: true,
    }, {
        prop: "borderOuterWidth",
        type: "number",
        label: "表盘外边框(px)",
        ph: "2"
    }, {
        prop: "borderMiddleWidth",
        type: "number",
        label: "表盘中边框(px)",
        ph: "2"
    }, {
        prop: "borderInnerWidth",
        type: "number",
        label: "表盘内边框(px)",
        ph: "2"
    }, {
        prop: "borderShadowWidth",
        type: "number",
        label: "表盘阴影(px)",
        ph: "2"
    }, {
        prop: "barWidth",
        type: "number",
        label: "进度条宽度(%)",
        ph: "5"
    }, {
        prop: "barStrokeWidth",
        type: "number",
        label: "进度条边框(px)",
        ph: "2"
    }, {
        prop: "barShadow",
        type: "number",
        label: "进度条阴影(px)",
        ph: "2"
    }, {
        prop: "animation",
        type: "switch",
        label: "是否开启动画"
    }, {
        prop: "animationRule",
        type: "select",
        label: "动画类型",
        items: ["linear", "quad", "quint", "cycle", "bounce", "elastic", "dequad", "dequint", "decycle", "debounce", "delastic"]
    }, {
        prop: "animationDuration",
        type: "number",
        label: "动画时长(毫秒)",
        ph: "1000"
    }, {
        prop: "animateOnInit",
        type: "switch",
        label: "初始化时是否播放动画"
    }, {
        prop: "animatedValue",
        type: "switch",
        label: "动画显示数值"
    }, {
        prop: "needle",
        type: "switch",
        label: "指针",
        default: true
    }, {
        prop: "needleType",
        type: "select",
        label: "指针类型",
        items: ["arrow", "line"],
        default: "arrow"
    }, {
        prop: "needleWidth",
        type: "number",
        label: "指针宽度",
        ph: "4"
    }, {
        prop: "needleStart",
        type: "number",
        label: "指针起点",
        ph: "10"
    }, {
        prop: "needleEnd",
        type: "number",
        label: "指针终点",
        ph: "60"
    }, {
        prop: "needleShadow",
        type: "switch",
        label: "指针阴影"
    }, {
        prop: "needleCircleSize",
        type: "number",
        label: "指针圆盘大小",
        default: "10",
        show: 'p.P.type != "linear"'
    }, {
        prop: "needleCircleInner",
        type: "switch",
        label: "指针圆盘内圆",
        default: true,
        show: 'p.P.type != "linear"'
    }, {
        prop: "needleCircleOuter",
        type: "switch",
        label: "指针圆盘外圆",
        default: true,
        show: 'p.P.type != "linear"'
    }, {
        prop: "ticksAngle",
        type: "number",
        label: "刻度盘最大覆盖角度",
        default: "270",
        show: 'p.P.type != "linear"'
    }, {
        prop: "startAngle",
        type: "number",
        label: "刻度盘开始角度",
        default: "45",
        show: 'p.P.type != "linear"'
    }, {
        prop: "animationTarget",
        type: "select",
        label: "动画应用的对象",
        items: [
            ["needle", "plate"],
            ["指针", "底盘"]
        ],
        default: "needle",
        show: 'p.P.type != "linear"'
    }, {
        prop: "useMinPath",
        type: "switch",
        label: "使用最短旋转路径",
        show: 'p.P.type != "linear" && p.P.ticksAngle == 360'
    }, {
        prop: "tickSide",
        type: "select",
        label: "刻度标记显示的位置",
        items: [
            ["left", "right", "both"],
            ["左侧", "右侧", "两侧"]
        ],
        default: "both",
        show: 'p.P.type == "linear"'
    }, {
        prop: "needleSide",
        type: "select",
        label: "指针显示的位置",
        items: [
            ["left", "right", "both"],
            ["左侧", "右侧", "两侧"]
        ],
        default: "both",
        show: 'p.P.type == "linear"'
    }, {
        prop: "numberSide",
        type: "select",
        label: "数值显示的位置",
        items: [
            ["left", "right", "both"],
            ["左侧", "右侧", "两侧"]
        ],
        default: "both",
        show: 'p.P.type == "linear"'
    }, {
        prop: "on.animate",
        type: "exp",
        label: "动画过程表达式",
        ph: "动画过程中执行: gauge, percent, value"
    }, {
        prop: "on.animationStart",
        type: "exp",
        label: "动画开始表达式",
        ph: "动画开始前执行: gauge"
    }, {
        prop: "colorPlate",
        type: "text",
        label: "表盘颜色"
    }, {
        prop: "colorPlateEnd",
        type: "text",
        label: "表盘过渡色"
    }, {
        prop: "colorMajorTicks",
        type: "text",
        label: "主刻度颜色"
    }, {
        prop: "colorMinorTicks",
        type: "text",
        label: "次刻度颜色"
    }, {
        prop: "colorStrokeTicks",
        type: "text",
        label: "刻度边框色"
    }, {
        prop: "colorTitle",
        type: "text",
        label: "标题颜色"
    }, {
        prop: "colorUnits",
        type: "text",
        label: "单位颜色"
    }, {
        prop: "colorNumbers",
        type: "text",
        label: "数值区颜色"
    }, {
        prop: "colorNeedle",
        type: "text",
        label: "指针颜色"
    }, {
        prop: "colorNeedleEnd",
        type: "text",
        label: "指针过度色"
    }, {
        prop: "colorValueText",
        type: "text",
        label: "数值颜色"
    }, {
        prop: "colorValueTextShadow",
        type: "text",
        label: "数值阴影色"
    }, {
        prop: "colorBorderShadow",
        type: "text",
        label: "边框阴影色"
    }, {
        prop: "colorBorderOuter",
        type: "text",
        label: "外边框色"
    }, {
        prop: "colorBorderOuterEnd",
        type: "text",
        label: "外边框过度色"
    }, {
        prop: "colorBorderMiddle",
        type: "text",
        label: "中边框色"
    }, {
        prop: "colorBorderMiddleEnd",
        type: "text",
        label: "中边框过度色"
    }, {
        prop: "colorBorderInner",
        type: "text",
        label: "内边框过度色"
    }, {
        prop: "colorBorderInnerEnd",
        type: "text",
        label: "内边框过度色"
    }, {
        prop: "colorValueBoxRect",
        type: "text",
        label: "数值框颜色"
    }, {
        prop: "colorValueBoxRectEnd",
        type: "text",
        label: "数值框过度色"
    }, {
        prop: "colorValueBoxBackground",
        type: "text",
        label: "数值框背景色"
    }, {
        prop: "colorValueBoxShadow",
        type: "text",
        label: "数值框阴影色"
    }, {
        prop: "colorNeedleShadowUp",
        type: "text",
        label: "指针阴影的上半部分"
    }, {
        prop: "colorNeedleShadowDown",
        type: "text",
        label: "指针投影色"
    }, {
        prop: "colorBar",
        type: "text",
        label: "进度条背景色"
    }, {
        prop: "colorBarEnd",
        type: "text",
        label: "进度条过度背景色"
    }, {
        prop: "colorBarProgress",
        type: "text",
        label: "进度条颜色"
    }, {
        prop: "colorBarProgressEnd",
        type: "text",
        label: "进度条过度色"
    }, {
        prop: "colorBarStroke",
        type: "text",
        label: "进度条边框色"
    }, {
        prop: "colorNeedleCircleOuter",
        type: "text",
        label: "指针圆盘外圆颜色",
        show: 'p.P.type != "linear"'
    }, {
        prop: "colorNeedleCircleOuterEnd",
        type: "text",
        label: "指针圆盘外圆过度色",
        show: 'p.P.type != "linear"'
    }, {
        prop: "colorNeedleCircleInner",
        type: "text",
        label: "指针圆盘内圆颜色",
        show: 'p.P.type != "linear"'
    }, {
        prop: "colorNeedleCircleInnerEnd",
        type: "text",
        label: "指针圆盘内圆过度色",
        show: 'p.P.type != "linear"'
    }],
    render,
    init,
    destroy
})