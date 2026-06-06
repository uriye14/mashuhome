; ============================================================
; 魔力宝贝 - 自动挂机脚本 (AutoHotkey v2)
; 窗口大小: 窗口设置-6 (约 1483×820)
; 坐标基于实测校准
; ============================================================
#Requires AutoHotkey v2.0

; === 配置参数（基于实测校准）===
WIN_TITLE := "新魔力宝贝"
WIN_X := 2183     ; 窗口左上角 X
WIN_Y := 771      ; 窗口左上角 Y
WIN_W := 1512     ; 窗口宽度（F3实测）
WIN_H := 887      ; 窗口高度（F3实测）

; 按钮坐标（根据实测，基于窗口左上角动态计算）
; 左边按钮排：功能/疾跑/遇敌/动作/回城
BTN_BAR_X1 := 110     ; 第1个按钮(功能), 回城(第5个)=318, X1=318-4*52=110
BTN_BAR_Y := 669      ; 回城校准捕获 Y (F5实测)
BTN_BAR_STEP := 52    ; 每个按钮间距
; 回城 = 第5个 = BTN_BAR_X1 + 4*50 = 89 + 200 = 289
; 遇敌 = 第3个 = BTN_BAR_X1 + 2*50 = 89 + 100 = 189

; 按钮索引（1=功能, 2=疾跑, 3=遇敌, 4=动作, 5=回城）
BTN_FUNC_INDEX := 1
BTN_SPRINT_INDEX := 2
BTN_ENEMY_INDEX := 3
BTN_ACTION_INDEX := 4
BTN_RETURN_INDEX := 5

; 蓝量阈值（满蓝 2142，低于 90% 即 < 1928 触发回城）
MP_THRESHOLD := 1928
MP_MAX := 2142

; === 配置 ===
; 回城落点判定（A组=近，B组=需要寻路）
; A组坐标（离服务大厅近）：(242,100) 和 (233,78)
; B组坐标（离服务大厅远）：(141,148), (63,79), (162,130), (72,123)
; 校准方法：到落点后按 F8 读取像素颜色和坐标
LANDING_A1_X := 242
LANDING_A1_Y := 100
LANDING_A2_X := 233
LANDING_A2_Y := 78
LANDING_B1_X := 141
LANDING_B1_Y := 148
LANDING_B2_X := 63
LANDING_B2_Y := 79
LANDING_B3_X := 162
LANDING_B3_Y := 130
LANDING_B4_X := 72
LANDING_B4_Y := 123

; === 测试热键 ===
F12:: {
    MsgBox "AHK脚本运行中！`n`nF1=启动 F2=停止 F3=检测窗口`nF4=实时坐标 F5=单次坐标`nF6=回城测试 F7=校准落点颜色`nF8=取色工具  F10=校准模式`nF12=帮助"
}

; === F7 校准模式：记录当前落点的像素颜色 ===
F7:: {
    global WIN_TITLE
    if !WinExist(WIN_TITLE) {
        MsgBox "未找到窗口"
        return
    }
    WinGetPos &wx, &wy, &ww, &wh, WIN_TITLE
    CoordMode "Mouse", "Screen"
    MouseGetPos &mx, &my
    relX := mx - wx
    relY := my - wy
    
    ; 在当前鼠标位置取颜色
    CoordMode "Pixel", "Screen"
    PixelGetColor color, mx, my
    
    ToolTip "坐标: (" relX "," relY ")`n颜色: " color
    
    ; 追加到校准文件
    try {
        FileAppend "相对窗口: (" relX "," relY ")`t颜色: " color "`n", A_ScriptDir "\landing_colors.txt"
    }
    SetTimer () => ToolTip(), -5000
}

; === F8 取色工具：读鼠标位置颜色并显示 ===
F8:: {
    global WIN_TITLE
    CoordMode "Mouse", "Screen"
    MouseGetPos &mx, &my
    CoordMode "Pixel", "Screen"
    PixelGetColor color, mx, my

    if WinExist(WIN_TITLE) {
        WinGetPos &wx, &wy, &ww, &wh, WIN_TITLE
        relX := mx - wx
        relY := my - wy
        ToolTip "屏幕: X" mx " Y" my "`n相对窗口: X" relX " Y" relY "`n颜色: " color
    } else {
        ToolTip "屏幕: X" mx " Y" my "`n颜色: " color
    }
    SetTimer () => ToolTip(), -8000
    ; 记录到文件
    try {
        FileAppend "屏幕: (" mx "," my ")`t颜色: " color "`n", A_ScriptDir "\color_log.txt"
    }
}

; === 主循环控制 ===
isRunning := false

; === 快捷键 ===
F1:: {
    global isRunning
    if isRunning {
        ToolTip "脚本已在运行中"
        SetTimer () => ToolTip(), -2000
        return
    }
    isRunning := true
    ToolTip "自动挂机启动！"
    SetTimer () => ToolTip(), -1500
    MainLoop()
}

F2:: {
    global isRunning
    isRunning := false
    ToolTip "已停止"
    SetTimer () => ToolTip(), -1500
}

F3:: {
    DetectWindow()
}

F4:: {
    static showCoord := false
    showCoord := !showCoord
    if showCoord {
        CoordMode "Mouse", "Screen"
        MouseGetPos &mx, &my
        ToolTip "F4 坐标显示开启`n当前鼠标: X" mx " Y" my
        SetTimer ShowMousePos, 100
    } else {
        SetTimer ShowMousePos, 0
        ToolTip
    }
}

F5:: {
    global WIN_TITLE
    if !WinExist(WIN_TITLE) {
        MsgBox "未找到窗口"
        return
    }
    WinGetPos &wx, &wy, &ww, &wh, WIN_TITLE
    CoordMode "Mouse", "Screen"
    MouseGetPos &mx, &my
    relX := mx - wx
    relY := my - wy
    ToolTip "屏幕: " mx "x" my "`n相对窗口: " relX "x" relY "`n窗口大小: " ww "x" wh
    SetTimer () => ToolTip(), -5000
}

F6:: {
    if WinExist(WIN_TITLE) {
        ReturnCity()
        ToolTip "回城测试完成"
        SetTimer () => ToolTip(), -2000
    } else {
        MsgBox "未找到目标窗口"
    }
}

; === F10 校准模式 ===
; 按F10后把鼠标移到回城按钮上，再按Ctrl+Q记录坐标
F10:: {
    global WIN_TITLE
    if !WinExist(WIN_TITLE) {
        MsgBox "未找到窗口"
        return
    }
    WinGetPos &wx, &wy, &ww, &wh, WIN_TITLE
    MsgBox "【校准模式】`n`n1. 点确定后激活窗口`n2. 把鼠标移到「回城」按钮上`n3. 按 Ctrl+Q 记录坐标"
    WinActivate WIN_TITLE
    Sleep 500
    ToolTip "校准模式 — 把鼠标移到「回城」上按 Ctrl+Q"
}

; Ctrl+Q — 记录坐标
^q:: {
    global WIN_TITLE
    if !WinExist(WIN_TITLE) {
        ToolTip
        return
    }
    WinGetPos &wx, &wy, &ww, &wh, WIN_TITLE
    CoordMode "Mouse", "Screen"
    MouseGetPos &mx, &my
    relX := mx - wx
    relY := my - wy
    ToolTip "回城坐标`n相对窗口: " relX "x" relY "`n屏幕: " mx "x" my "`n"
    SetTimer () => ToolTip(), -8000
    try {
        f := FileOpen(A_ScriptDir "\coords.txt", "w")
        f.Write("相对窗口: X" relX " Y" relY "`n屏幕: X" mx " Y" my)
        f.Close()
        MsgBox "坐标: 相对窗口 (" relX "," relY ")`n请手动更新脚本中的 BTN_BAR_X1 和 BTN_BAR_Y"
    }
}

; Ctrl+W — 清除提示
^w:: {
    ToolTip
}

ShowMousePos() {
    CoordMode "Mouse", "Screen"
    MouseGetPos &mx, &my
    title := WinGetTitle("A")
    ToolTip "坐标: X" mx " Y" my "`n窗口: " title
}

; === 检测窗口 ===
DetectWindow() {
    global WIN_X, WIN_Y, WIN_W, WIN_H
    try {
        if WinExist(WIN_TITLE) {
            WinGetPos &x, &y, &w, &h, WIN_TITLE
            title := WinGetTitle(WIN_TITLE)
            mp := 0
            if RegExMatch(title, "Mp:(\d+)", &match)
                mp := Integer(match[1])
            MsgBox "找到目标窗口！`n标题: " title "`n当前蓝量: " mp "`n窗口位置: " x "x" y "`n窗口大小: " w "x" h
        } else {
            MsgBox "未找到魔力宝贝窗口"
        }
    } catch as e {
        MsgBox "查找窗口出错: " e.Message
    }
}

; === 读取当前蓝量 ===
GetCurrentMP() {
    if !WinExist(WIN_TITLE)
        return -1
    
    title := WinGetTitle(WIN_TITLE)
    if RegExMatch(title, "Mp:(\d+)", &match) {
        return Integer(match[1])
    }
    return -1
}

; === 等待窗口激活 ===
ActivateWindow() {
    if WinExist(WIN_TITLE) {
        WinActivate WIN_TITLE
        WinWaitActive WIN_TITLE, , 3
        Sleep 500
    }
}

; === 点击窗口内坐标 ===
ClickAt(relX, relY) {
    global WIN_TITLE
    if !WinExist(WIN_TITLE)
        return
    WinActivate WIN_TITLE
    Sleep 200
    WinGetPos &wx, &wy, &ww, &wh, WIN_TITLE
    CoordMode "Mouse", "Screen"
    MouseClick "Left", wx + relX, wy + relY
    Sleep 800
}

; === 点击按钮排的某个按钮（1=功能, 2=疾跑, 3=遇敌, 4=动作, 5=回城）===
ClickButton(idx) {
    global BTN_BAR_X1, BTN_BAR_Y, BTN_BAR_STEP, WIN_X, WIN_Y, WIN_TITLE, WIN_W, WIN_H
    ; 先激活窗口
    if WinExist(WIN_TITLE) {
        WinActivate WIN_TITLE
        WinWaitActive WIN_TITLE, , 2
    }
    Sleep 300
    ; 获取实时窗口位置（防止窗口移动）
    WinGetPos &wx, &wy, &ww, &wh, WIN_TITLE
    CoordMode "Mouse", "Screen"
    targetX := wx + BTN_BAR_X1 + (idx - 1) * BTN_BAR_STEP
    targetY := wy + BTN_BAR_Y
    MouseClick "Left", targetX, targetY
    Sleep 800
}

; === 前往服务大厅（从任意回城落点）===
GoToServiceHall() {
    ActivateWindow()
    Sleep 500
    ToolTip "开小地图前往服务大厅"
    ClickAt(1355, 164)   ; 小地图
    Sleep 1500
    ClickAt(823, 428)    ; 服务大厅
    Sleep 1000
    ClickAt(839, 337)    ; 前往
    Sleep 3000
}

; === 回城 ===
ReturnCity() {
    ActivateWindow()
    Sleep 500
    
    ToolTip "步骤1: 点击回城按钮"
    ClickButton(BTN_RETURN_INDEX)
    Sleep 2000
    
    ToolTip "步骤2: 点击回城确认"
    ClickAt(662, 549)
    Sleep 4000
}

; === 打开地图并前往服务大厅（卖魔石）===
GoSellMagicStone() {
    ActivateWindow()
    Sleep 500
    ToolTip "步骤3: 打开大地图前往服务大厅"
    ; 点右上角小地图打开大地图
    ClickAt(1360, 197)
    Sleep 1500
    ; 点地图上的「服务大厅」位置
    ClickAt(823, 428)
    Sleep 1000
    ; 点「前往」按钮
    ClickAt(839, 337)
    Sleep 3000
    
    ToolTip "步骤4: 卖魔石"
    ; 在服务大厅中点魔石售卖员NPC
    ClickAt(WIN_W // 2, WIN_H * 0.55)
    Sleep 2000
    ; 点「全队出售」确定按钮
    ClickAt(666, 525)
    Sleep 2000
    ; 第二次确认（有时需要点两次）
    ClickAt(666, 525)
    Sleep 1500
}

; === 打开地图前往资深护士（补魔）===
GoHeal() {
    ActivateWindow()
    Sleep 500
    ToolTip "步骤5: 打开地图前往医院补魔"
    ; 打开地图
    ClickAt(WIN_W - 80, 30)
    Sleep 1500
    ; 点医院/资深护士附近
    ClickAt(WIN_W // 2, WIN_H * 0.6)
    Sleep 1000
    ; 点「前往」按钮
    ClickAt(WIN_W // 2, WIN_H * 0.35)
    Sleep 3000
    
    ToolTip "步骤6: 选补魔选项"
    ; 选「集体恢复人物和宠物的全部魔法和生命力」
    ClickAt(718, 447)
    Sleep 2000
}

; === 去水之洞穴1层 ===
GoWaterCave() {
    ActivateWindow()
    Sleep 500
    ToolTip "步骤5: 去水之洞穴"
    ClickAt(WIN_W - 120, 30)
    Sleep 2000
    ClickAt(WIN_W // 2, WIN_H * 0.6)
    Sleep 3000
    ClickAt(WIN_W // 2, WIN_H // 2)
    Sleep 2000
    ClickAt(WIN_W // 2, WIN_H * 0.55)
    Sleep 3000
    ClickAt(WIN_W // 2, WIN_H // 2)
    Sleep 2000
    ClickAt(WIN_W // 2, WIN_H * 0.5)
    Sleep 1500
    ClickAt(WIN_W // 2 + 50, WIN_H * 0.55)
    Sleep 3000
    ClickAt(WIN_W // 2, WIN_H // 2)
    Sleep 2000
    ToolTip "步骤6: 开遇敌"
    ClickButton(BTN_ENEMY_INDEX)
    Sleep 1000
}

; === 主循环 ===
MainLoop() {
    global isRunning
    
    loop {
        if !isRunning
            break
        
        mp := GetCurrentMP()
        if (mp < 0) {
            ToolTip "未找到游戏窗口，等待..."
            Sleep 10000
            continue
        }
        
        ToolTip "监控中... 当前蓝量: " mp "/" MP_MAX " (" Round(mp/MP_MAX*100) "%)"
        
        if (mp < MP_THRESHOLD) {
            ToolTip "蓝量不足(" mp ")，开始回城补给..."
            SetTimer () => ToolTip(), -2000
            
            ReturnCity()
            GoToServiceHall()
            GoSellMagicStone()
            GoHeal()
            GoWaterCave()
            
            Sleep 5000
            
            mp := GetCurrentMP()
            if (mp > MP_THRESHOLD) {
                ToolTip "补给完成，蓝量: " mp
            } else {
                ToolTip "补给可能未完成，继续监控..."
            }
        }
        
        Sleep 30000
    }
    
    isRunning := false
    ToolTip "自动挂机已停止"
    SetTimer () => ToolTip(), -3000
}
