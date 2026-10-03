import type { Locale } from './site';

export type Localized = { zh: string; en: string };
export type IndustryItem = {
  title: string;
  company: string;
  industry: string;
  period: string;
  role: string;
  summary: string;
  paragraphs?: string[];
  responsibilities: string[];
  architecture?: string[];
  technologies: string[];
  status: string;
  images: string[];
  video: string;
  links: string[];
  confidential: boolean;
};

const entries: Record<Locale, IndustryItem[]> = {
  zh: [
    {
      "title": "十路智能充电桩控制系统",
      "company": "上海沐厄信息科技有限公司",
      "industry": "物联网硬件",
      "period": "",
      "role": "独立硬件与嵌入式开发",
      "summary": "项目面向十路智能充电桩控制终端，由本人独立负责从系统方案、硬件电路、嵌入式程序到通信与云端联调的完整开发流程。系统按照十路独立充电通道设计，单路设计功率约 300 W，并围绕通断电控制、NFC 身份识别、设备状态通信及后台控制构建完整控制链路。",
      "paragraphs": [
        "项目面向十路智能充电桩控制终端，由本人独立负责从系统方案、硬件电路、嵌入式程序到通信与云端联调的完整开发流程。系统按照十路独立充电通道设计，单路设计功率约 300 W，并围绕通断电控制、NFC 身份识别、设备状态通信及后台控制构建完整控制链路。",
        "硬件部分完成十路主控制板及相关功能模块设计与调试，涉及 220 V 至 12 V/5 V 电源转换、NFC 模块、继电器控制、电源模块及外围接口等电路，并结合整机结构和成本约束完成元器件选型、PCB 设计与系统装配联调。",
        "嵌入式软件部分独立完成十路充电控制逻辑，包括继电器通断控制、NFC 装置识别、状态采集、串口通信及设备控制等功能，并开发 PC 串口调试、回环测试和模块级验证程序，以支持硬件调试和整机故障定位。",
        "通信与物联网部分基于 Air724UG 合宙通信模块完成联网功能开发，通过 MQTT 建立设备与后台之间的数据通信，并完成与华为云 IoT 平台的设备接入及通信联调，实现设备状态上报、控制指令接收及远程充电控制等功能。",
        "项目覆盖需求分析、系统方案、原理图与 PCB、嵌入式软件、通信协议、云平台接入、模块调试和整机联调等多个环节，形成从设备端到云端的完整开发闭环。"
      ],
      "responsibilities": [],
      "technologies": [
        "STM32 / MCU",
        "PCB Design",
        "Embedded C",
        "Air724UG",
        "MQTT",
        "Huawei Cloud IoT",
        "NFC",
        "Relay Control",
        "UART"
      ],
      "status": "",
      "images": [
        "/media/industry/product-01-上海沐厄信息科技有限公司/Pcb-real.jpg"
      ],
      "video": "",
      "links": [],
      "confidential": false
    },
    {
      title: '桌面学伴机器人', company: '杭州叮当葫芦互联网数据服务有限公司', industry: '教育机器人', period: '2025.04~2026.03', role: '技术中心硬件开发工程师',
      summary: '在技术中心参与桌面学伴机器人的嵌入式硬件与整机方案开发。产品面向儿童学习陪伴场景，以 AI 大模型、前概念认知分析与多模态交互为软件能力基础，并通过桌面机器人形态实现语音、视觉、动态表情、微投影及联网交互等功能。本人主要围绕机器人硬件系统的功能拆解、模块选型、接口设计和原型实现开展工作，使上层 AI 与交互能力具备可落地的实体硬件载体。',
      responsibilities: [
        '围绕桌面学伴机器人的完整功能需求开展嵌入式硬件方案设计，将整机功能拆分为主控计算、联网通信、视觉感知、音频交互、动态表情显示、微型投影、传感器采集、定位与电源管理等硬件子系统，并结合整机尺寸、功耗、接口数量与结构安装空间进行模块选型和接口规划。',
        '以 MCU / 嵌入式控制平台作为底层设备控制核心，规划 UART、I²C、SPI、PWM、GPIO 等接口资源，为摄像头、显示与表情机构、投影、音频、传感器和执行模块提供统一的底层控制与状态采集接口，并为后续整机控制程序和模块级调试预留硬件条件。',
        '围绕机器人的联网与云端 AI 能力设计通信链路，使设备端能够与后台及云端服务交换状态与交互数据，为连续对话、学习任务、设备管理及远程能力提供硬件通信基础。',
        '针对机器人的视觉与多模态交互需求，规划摄像头、麦克风/扬声器、动态表情显示、微投影以及相关传感器模块的硬件集成方式，并结合产品结构设计确定模块安装位置、供电和数据接口。',
        '参与机器人原型机的器件选型、模块测试、接口联调和整机硬件验证，重点解决不同功能模块之间的供电、通信、结构空间与协同工作问题，为后续嵌入式软件、AI 服务和整机功能迭代提供稳定硬件平台。'
      ], architecture: ['云端 AI / 后台服务', '↕', '联网通信', '↕', '嵌入式主控', '↕', '视觉 / 音频 / 表情显示 / 微投影 / 传感器 / 电源'], technologies: ['Embedded Hardware', 'MCU', 'UART', 'I²C', 'SPI', 'PWM', 'GPIO', 'Prototype Integration'], status: '原型开发',
      images: ['/media/industry/product-02-杭州叮当葫芦互联网数据服务有限公司/桌面学伴机器人.png'], video: '', links: [],
      confidential: false,
    },
  ],
  en: [
    {
      "title": "10-Channel Intelligent Charging Station Control System",
      "company": "Shanghai Muoer Information Technology Co., Ltd.",
      "industry": "IoT hardware",
      "period": "",
      "role": "Independent Hardware and Embedded Systems Developer",
      "summary": "Independently developed the complete device-side system for a 10-channel intelligent charging station, covering system architecture, hardware design, embedded firmware, communications, and cloud integration. Each charging channel was designed for approximately 300 W and incorporated independent power switching, NFC-based identification, device-status communication, and remote control.",
      "paragraphs": [
        "Independently developed the complete device-side system for a 10-channel intelligent charging station, covering system architecture, hardware design, embedded firmware, communications, and cloud integration. Each charging channel was designed for approximately 300 W and incorporated independent power switching, NFC-based identification, device-status communication, and remote control.",
        "Designed and debugged the main control board and supporting hardware modules, including 220 V-to-12 V/5 V power conversion, NFC interfaces, relay-control circuits, power modules, and peripheral interfaces. Component selection, PCB design, assembly, and system-level integration were carried out under practical structural and cost constraints.",
        "Implemented the embedded control software for the ten charging channels, including relay switching, NFC-device identification, status acquisition, UART communication, and device-control logic. Developed dedicated PC serial-debugging, loopback-testing, and module-validation tools for hardware bring-up and system troubleshooting.",
        "Implemented cellular and cloud connectivity using the Air724UG communication module. MQTT was used for device-to-backend communication, and the system was integrated and tested with Huawei Cloud IoT for device registration, status reporting, command reception, and remote charging control.",
        "The project covered the complete engineering workflow from requirements analysis and system design to schematic/PCB development, embedded software, communications, cloud integration, module testing, and system-level debugging."
      ],
      "responsibilities": [],
      "technologies": [
        "STM32 / MCU",
        "PCB Design",
        "Embedded C",
        "Air724UG",
        "MQTT",
        "Huawei Cloud IoT",
        "NFC",
        "Relay Control",
        "UART"
      ],
      "status": "",
      "images": [
        "/media/industry/product-01-上海沐厄信息科技有限公司/Pcb-real.jpg"
      ],
      "video": "",
      "links": [],
      "confidential": false
    },
    {
      title: 'Desktop Learning Companion Robot', company: 'Hangzhou Dingdang Hulu Internet Data Service Co., Ltd.', industry: 'Educational robotics', period: '2025.04~2026.03', role: 'Hardware Development Engineer, Technology Center',
      summary: 'Worked on the embedded hardware and system architecture of a desktop AI learning companion robot. The product combines large-language-model services, preconception-based cognitive analysis, and multimodal interaction with a physical desktop robot capable of voice interaction, visual perception, animated facial expressions, micro-projection, and network connectivity. My work focused on decomposing product-level functions into implementable hardware subsystems, selecting modules, defining interfaces, and supporting prototype integration so that the upper-layer AI and interaction capabilities could be realized on a physical embedded platform.',
      responsibilities: [
        'Developed the embedded hardware concept around the complete functional requirements of the robot, decomposing the system into embedded control, network communication, visual perception, audio interaction, animated expression display, micro-projection, sensing, positioning, and power-management subsystems.',
        'Planned MCU and embedded-controller resources and hardware interfaces including UART, I²C, SPI, PWM, and GPIO for cameras, displays, projection modules, sensors, audio devices, and peripheral actuators.',
        'Designed the device-side communication architecture required for connectivity between the robot, backend services, and cloud-based AI capabilities.',
        'Planned the hardware integration of cameras, microphones/speakers, animated expression displays, micro-projection, and sensing modules while considering mechanical layout, power distribution, and interface constraints.',
        'Supported component selection, module validation, interface debugging, and prototype-level system integration, providing a stable hardware foundation for embedded software and subsequent AI-enabled product development.'
      ], architecture: ['AI / Cloud', '↕', 'Networking', '↕', 'Embedded Controller', '↕', 'Vision · Audio · Display · Projection · Sensors · Power'], technologies: ['Embedded Hardware', 'MCU', 'UART', 'I²C', 'SPI', 'PWM', 'GPIO', 'Prototype Integration'], status: 'Prototype development',
      images: ['/media/industry/product-02-杭州叮当葫芦互联网数据服务有限公司/桌面学伴机器人.png'], video: '', links: [],
      confidential: false,
    },
  ],
};

export const industry: Record<Locale, IndustryItem[]> = entries;
