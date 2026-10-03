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
      title: '桌面学伴机器人', company: '杭州叮当葫芦互联网数据服务有限公司', industry: '教育机器人', period: '2025.04-2026.03', role: '技术中心硬件开发工程师',
      summary: '在技术中心从事桌面学伴机器人的硬件开发。产品方案面向学习陪伴，结合 AI 大模型与智能硬件，规划连续对话和多模态交互功能。',
      responsibilities: ['参与桌面机器人硬件开发', '整理项目计划与产品资料'], technologies: ['桌面机器人', '硬件开发'], status: '工程材料',
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
      title: 'Desktop Learning Companion Robot', company: 'Hangzhou Dingdang Hulu Internet Data Services Co., Ltd.', industry: 'Educational robotics', period: '2025.04-2026.03', role: 'Hardware Development Engineer, Technology Center',
      summary: 'Worked on hardware development for a desktop learning companion robot in the Technology Center. The product plan combines large language models and smart hardware, with continuous dialogue and multimodal interaction planned for learning support.',
      responsibilities: ['Contributed to desktop-robot hardware development', 'Organized project planning and product materials'], technologies: ['Desktop robotics', 'Hardware development'], status: 'Engineering materials',
      images: ['/media/industry/product-02-杭州叮当葫芦互联网数据服务有限公司/桌面学伴机器人.png'], video: '', links: [],
      confidential: false,
    },
  ],
};

export const industry: Record<Locale, IndustryItem[]> = entries;
