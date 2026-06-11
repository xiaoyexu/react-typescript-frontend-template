import React, { useState } from 'react';
import TreeCosmoVisualization, {
  TreeCosmoData,
  TreeNode
} from '../../../components/TreeCosmoVisualization';

// Sample tree data for demonstration
const sampleData3: TreeCosmoData = {
  data: {
    id: 1,
    parentId: null,
    text: 'knowlege',
    uuid: '5641f4e3-d70a-4e88-8936-8d2b251686be',
    children: [
      {
        id: 4,
        parentId: 2,
        text: 'ssh-agent，多台用同一key登录',
        uuid: '586f4456-c111-485a-ad4b-f696bd00a27a',
        children: null
      },
      {
        id: 5,
        parentId: 2,
        text: 'Ubuntu/centos免密码登录',
        uuid: '27214e2c-c48e-4b57-aa89-0c84c1cb4bf6',
        children: null
      }
    ]
  }
};

const sampleData: TreeCosmoData = {
  data: {
    id: 1,
    parentId: null,
    text: 'knowlege',
    uuid: '5641f4e3-d70a-4e88-8936-8d2b251686be',
    children: [
      {
        id: 2,
        parentId: 1,
        text: 'CentOS 7, Ubuntu & Misc',
        uuid: '7714a45c-fe1c-47fb-9980-a9880f8f3631',
        children: [
          {
            id: 4,
            parentId: 2,
            text: 'ssh-agent，多台用同一key登录',
            uuid: '586f4456-c111-485a-ad4b-f696bd00a27a',
            children: null
          },
          {
            id: 5,
            parentId: 2,
            text: 'Ubuntu/centos免密码登录',
            uuid: '27214e2c-c48e-4b57-aa89-0c84c1cb4bf6',
            children: null
          },
          {
            id: 6,
            parentId: 2,
            text: '修改主机名',
            uuid: '7da2dfa0-9bb0-4648-b9da-93f563470249',
            children: null
          },
          {
            id: 7,
            parentId: 2,
            text: '设置时区datetimectl',
            uuid: 'e654ca6e-0676-40d7-971f-c740773e3c37',
            children: null
          },
          {
            id: 8,
            parentId: 2,
            text: 'ubuntu journal',
            uuid: '4407231c-1108-4ab3-adbc-17cd2004c624',
            children: null
          },
          {
            id: 9,
            parentId: 2,
            text: 'centos 7.3 minimal ios 网络设置',
            uuid: 'e84204c0-b19e-4758-9479-15584d504c88',
            children: null
          },
          {
            id: 10,
            parentId: 2,
            text: 'Centos磁盘操作',
            uuid: '9d39bd07-7494-44f8-bc62-f47e7cc67a38',
            children: null
          },
          {
            id: 11,
            parentId: 2,
            text: '/etc/passwd and /etc/groups',
            uuid: 'ecb6852b-b836-42c3-b06b-f57c915e21ec',
            children: null
          },
          {
            id: 12,
            parentId: 2,
            text: '/proc/cpuinfo',
            uuid: '1726073e-3c81-495f-81cb-a96790baafd9',
            children: null
          },
          {
            id: 13,
            parentId: 2,
            text: 'lspci',
            uuid: '72dde6f2-f844-44ce-9ffc-0355e43acc48',
            children: null
          },
          {
            id: 14,
            parentId: 2,
            text: 'openssl',
            uuid: '3e2d0511-f43f-42a9-b78c-813bd1334a9d',
            children: null
          },
          {
            id: 15,
            parentId: 2,
            text: 'sed',
            uuid: 'f955d394-acf6-400d-b96a-8ce51842b439',
            children: null
          },
          {
            id: 16,
            parentId: 2,
            text: 'curl',
            uuid: 'b2ab271e-0e83-4d30-a54a-5418e5525bde',
            children: null
          },
          {
            id: 17,
            parentId: 2,
            text: 'tar',
            uuid: '82bbeb6e-a37b-408e-9704-f76c1a7f5891',
            children: null
          },
          {
            id: 18,
            parentId: 2,
            text: 'gzip',
            uuid: '7c506414-b05c-4ffe-81f2-f0c86c601db3',
            children: null
          },
          {
            id: 19,
            parentId: 2,
            text: 'AWK',
            uuid: 'b9f534b8-9a54-4892-90e9-9d560de16c95',
            children: null
          },
          {
            id: 20,
            parentId: 2,
            text: 'PIP',
            uuid: 'd0682d56-6c95-4cc8-ad69-ae3fddfb7a05',
            children: null
          },
          {
            id: 21,
            parentId: 2,
            text: 'zip',
            uuid: '42ea6bcd-a871-42b6-8a0d-e0f7ee957719',
            children: null
          },
          {
            id: 22,
            parentId: 2,
            text: 'chattr',
            uuid: 'dfd67f5e-3fd3-4769-95bc-7ee454df69ca',
            children: null
          },
          {
            id: 23,
            parentId: 2,
            text: 'id',
            uuid: '255a6a97-781a-4a34-8f68-92da56147008',
            children: null
          },
          {
            id: 24,
            parentId: 2,
            text: 'su/sudo',
            uuid: '2c04c714-0a19-4468-b3ba-85a0ca996f2e',
            children: null
          },
          {
            id: 25,
            parentId: 2,
            text: 'zgrep',
            uuid: 'dbfa0b98-e7b8-4e19-9cea-d7f4ddd7a821',
            children: null
          },
          {
            id: 26,
            parentId: 2,
            text: 'xargs',
            uuid: '65186d95-4d53-40a4-9df2-65a44d44127f',
            children: null
          },
          {
            id: 27,
            parentId: 2,
            text: 'find',
            uuid: 'dcaa917e-d5cc-484a-bf96-70a52795dfb2',
            children: null
          },
          {
            id: 28,
            parentId: 2,
            text: 'iptables',
            uuid: '6dd83360-a30d-46fb-a23e-7fc5bd887bfc',
            children: null
          },
          {
            id: 29,
            parentId: 2,
            text: 'netplan/resolv.conf',
            uuid: 'a50db107-37c1-42ec-b5ef-ca8cb9bd72f3',
            children: null
          },
          {
            id: 30,
            parentId: 2,
            text: 'Mac keychain',
            uuid: '3ac193dd-b829-4c86-9cb7-936651de13fd',
            children: null
          },
          {
            id: 31,
            parentId: 2,
            text: 'swap设置',
            uuid: '6858d4f0-0699-4c25-a550-f4d8cd3b22e8',
            children: null
          },
          {
            id: 32,
            parentId: 2,
            text: 'LVM分区设置',
            uuid: 'a2ad5ada-1b11-42d2-8ebe-2160bca12f18',
            children: [
              {
                id: 33,
                parentId: 32,
                text: '例 已有硬盘设置',
                uuid: 'f38f4b39-813b-4b07-850a-02841cff533d',
                children: null
              },
              {
                id: 34,
                parentId: 32,
                text: '例 新硬盘设置',
                uuid: 'f3c8f30d-7a86-4ce8-ace6-372a3f06bb1c',
                children: null
              },
              {
                id: 35,
                parentId: 32,
                text: 'lvextend调整大小',
                uuid: '5220e4de-70d5-4572-a340-c01715db92f2',
                children: null
              },
              {
                id: 36,
                parentId: 32,
                text: '调整/dev/mapper分区大小',
                uuid: 'dbd9bf2d-0ebb-4640-8bce-db5174501708',
                children: null
              }
            ]
          },
          {
            id: 37,
            parentId: 2,
            text: 'Ubuntu更新内核',
            uuid: '51057fd5-61d8-4cd7-99c1-489a8c98d260',
            children: null
          },
          {
            id: 38,
            parentId: 2,
            text: 'VM NAT和Host-only adapter配置',
            uuid: '9b386513-2e08-41a3-95e3-b845f7949e4a',
            children: null
          },
          {
            id: 39,
            parentId: 2,
            text: 'fstab',
            uuid: '42c959c6-f678-490b-b947-86c23fc758e5',
            children: null
          },
          {
            id: 40,
            parentId: 2,
            text: 'Redhat NFS/rpcbind',
            uuid: 'a7f723bb-fa29-47a5-aa2d-41ca5b5b4813',
            children: null
          },
          {
            id: 41,
            parentId: 2,
            text: 'Gnupg',
            uuid: '18fbe086-6b98-4d5d-9027-09903c05c1e4',
            children: [
              {
                id: 42,
                parentId: 41,
                text: '使用gpg传送文件',
                uuid: '148a73de-f1ff-4820-a317-a5b52f0f4c73',
                children: null
              }
            ]
          },
          {
            id: 43,
            parentId: 2,
            text: '函数式编程',
            uuid: '4d511d7f-8796-4009-9525-b9cfe6ef882d',
            children: null
          },
          {
            id: 1065,
            parentId: 2,
            text: 'supervisor',
            uuid: '768205d9-1839-4b9d-9e28-8d9f4ff19fa4',
            children: null
          },
          {
            id: 44,
            parentId: 2,
            text: 'Broadcom CentOS下驱动安装',
            uuid: 'd8c8b473-6828-45c3-9abb-91a43308f66e',
            children: null
          },
          {
            id: 1145,
            parentId: 2,
            text: 'ubuntu service/systemctl',
            uuid: '11594936-67e1-410d-87f0-761667a3b5c7',
            children: null
          }
        ]
      },
      {
        id: 1088,
        parentId: 1,
        text: '设计模式、原则',
        uuid: '65ac0d40-8827-4a85-9c1d-e06986042925',
        children: [
          {
            id: 1089,
            parentId: 1088,
            text: '里氏替换',
            uuid: 'b76b6879-5bcb-4ba8-b772-bc63e409997b',
            children: null
          },
          {
            id: 1090,
            parentId: 1088,
            text: '开闭原则',
            uuid: 'eedf747c-3cde-4f00-af63-b48014fa674a',
            children: null
          },
          {
            id: 1091,
            parentId: 1088,
            text: '单一职责',
            uuid: '117f6573-a94e-4c70-9b23-3f174a9182a8',
            children: null
          },
          {
            id: 1092,
            parentId: 1088,
            text: '接口隔离',
            uuid: '2b4d1e42-f159-4aad-9aaf-3751af9c9c09',
            children: null
          },
          {
            id: 1093,
            parentId: 1088,
            text: '依赖倒置',
            uuid: '67e0a322-8595-4691-9f81-fc676d12a044',
            children: null
          },
          {
            id: 1094,
            parentId: 1088,
            text: '迪米特法则',
            uuid: '0b439f4d-3c7e-4b2c-bee6-1e215b654174',
            children: null
          }
        ]
      },
      {
        id: 1098,
        parentId: 1,
        text: '算法',
        uuid: 'c0cccc79-0ed2-4608-ae2c-656b044738ed',
        children: [
          {
            id: 1099,
            parentId: 1098,
            text: '排序',
            uuid: '1f3d101d-ff52-4637-8da3-1352ffececaf',
            children: [
              {
                id: 1100,
                parentId: 1099,
                text: '选择排序',
                uuid: 'e7491da6-de2f-4f36-bb19-45eb4af214e7',
                children: null
              },
              {
                id: 1101,
                parentId: 1099,
                text: '插入排序',
                uuid: '8430761a-4557-4420-9dbb-23343995611f',
                children: null
              },
              {
                id: 1102,
                parentId: 1099,
                text: '冒泡排序',
                uuid: '472522af-0340-43c8-abce-2f62a379e0df',
                children: null
              },
              {
                id: 1103,
                parentId: 1099,
                text: 'shell排序',
                uuid: 'e3bc53b6-9c4c-40f6-a583-8907e7cae2fc',
                children: null
              },
              {
                id: 1104,
                parentId: 1099,
                text: '快速排序',
                uuid: '7fdc5ec1-14e3-4675-b87e-e0a79aa71d50',
                children: null
              },
              {
                id: 1107,
                parentId: 1099,
                text: '二路归并',
                uuid: '887a395a-3218-49d0-b935-7c6d31a6e2e3',
                children: null
              }
            ]
          },
          {
            id: 1105,
            parentId: 1098,
            text: '搜索',
            uuid: 'f364966b-c01e-45da-8744-e5bf470f1b70',
            children: [
              {
                id: 1106,
                parentId: 1105,
                text: '一个django树递归例子',
                uuid: 'a53177a4-79d3-4283-87f0-885aff0111a9',
                children: null
              }
            ]
          },
          {
            id: 1173,
            parentId: 1098,
            text: '递归',
            uuid: '755470ed-8dac-4726-82b6-a35509d527ff',
            children: null
          }
        ]
      },
      {
        id: 45,
        parentId: 1,
        text: 'Django',
        uuid: 'ee88f7b8-572d-4bfc-8217-256b491e2035',
        children: [
          {
            id: 46,
            parentId: 45,
            text: 'Model',
            uuid: 'db1b2575-6e44-4469-a10e-9bdf7aa4be0c',
            children: null
          },
          {
            id: 47,
            parentId: 45,
            text: 'Fields',
            uuid: 'f8e467af-f6ea-42ff-9eaf-37b72765cabe',
            children: [
              {
                id: 48,
                parentId: 47,
                text: 'ImageField直接保存字符串',
                uuid: '033a963e-46d8-475f-9a36-b7fec72e6f2a',
                children: null
              },
              {
                id: 49,
                parentId: 47,
                text: 'ImageField加载文件图片',
                uuid: '6713a95e-db6e-4066-91a1-03e03c2e48fc',
                children: null
              },
              {
                id: 50,
                parentId: 47,
                text: 'auto_now/auto_now_add',
                uuid: '0feaf659-c4bd-427a-945a-fad62f00ac0f',
                children: null
              }
            ]
          },
          {
            id: 51,
            parentId: 45,
            text: 'Relationship',
            uuid: 'fad0a7c3-ef00-4956-86ad-a43af84b551b',
            children: null
          },
          {
            id: 52,
            parentId: 45,
            text: 'Admin界面',
            uuid: '92ea4ee1-b0f6-4b2b-8743-48620baa5310',
            children: null
          },
          {
            id: 53,
            parentId: 45,
            text: 'View',
            uuid: 'fb9968a6-4382-4573-a733-5bf9c02a188a',
            children: [
              {
                id: 54,
                parentId: 53,
                text: 'decorate 装饰符',
                uuid: '57a0c00f-ed58-4420-9b86-ba090b4e4357',
                children: null
              }
            ]
          },
          {
            id: 55,
            parentId: 45,
            text: 'View中分页',
            uuid: '9a52bdfe-1da7-4768-9e04-14ecbf638395',
            children: null
          },
          {
            id: 56,
            parentId: 45,
            text: 'Template',
            uuid: 'e9328b71-39c7-4a92-9886-2758ce39eeac',
            children: [
              {
                id: 57,
                parentId: 56,
                text: 'Filter',
                uuid: '4c2e8f7d-1d3b-43a4-a1b1-67a5db64a1b4',
                children: null
              }
            ]
          },
          {
            id: 58,
            parentId: 45,
            text: 'Tag',
            uuid: '1186a068-26f6-4d4d-b73a-ee51bfe0661c',
            children: [
              {
                id: 59,
                parentId: 58,
                text: 'Django Tag',
                uuid: '6db70ecd-edda-4571-8919-1966d2e2bd52',
                children: null
              }
            ]
          },
          {
            id: 60,
            parentId: 45,
            text: 'Form',
            uuid: '0c8ffcac-f074-4498-bbaa-eb93e6591471',
            children: null
          },
          {
            id: 61,
            parentId: 45,
            text: 'Statics',
            uuid: '324e9a80-2671-4ddf-b1b9-c205c12b6caa',
            children: null
          },
          {
            id: 62,
            parentId: 45,
            text: 'Logging',
            uuid: '6c4b3c95-9a3b-43f8-8e89-7064861a394c',
            children: null
          },
          {
            id: 63,
            parentId: 45,
            text: '缓存',
            uuid: '90c43956-2dd4-4048-8beb-961a285a09b1',
            children: null
          },
          {
            id: 64,
            parentId: 45,
            text: '中间件',
            uuid: '1477b934-3ca0-49c7-857b-7c477f3441ec',
            children: null
          },
          {
            id: 65,
            parentId: 45,
            text: 'Session',
            uuid: 'a1b2ec88-0eef-45e7-a6ea-721e6b6eee5e',
            children: null
          },
          {
            id: 66,
            parentId: 45,
            text: 'Q',
            uuid: '00402670-4a1a-42c3-8f21-6809492af753',
            children: null
          },
          {
            id: 67,
            parentId: 45,
            text: 'Q 动态 filter',
            uuid: '2d7a483c-a339-4014-bb25-43affce63085',
            children: null
          },
          {
            id: 68,
            parentId: 45,
            text: 'F',
            uuid: 'ac8424d1-a882-49ea-a297-26bfdc0ef445',
            children: null
          },
          {
            id: 69,
            parentId: 45,
            text: 'Sum/Count/Max/Min聚合 aggregate/annotate',
            uuid: 'fb6b79a7-49cc-404e-8846-77f3a7171e4e',
            children: null
          },
          {
            id: 70,
            parentId: 45,
            text: 'Distinct',
            uuid: 'ccf4cbcf-f127-4fc7-ba21-f37239f0fe9e',
            children: null
          },
          {
            id: 71,
            parentId: 45,
            text: 'Model Q对象使用实例',
            uuid: 'e4576c62-9231-48f0-ab06-b09ea2a244d2',
            children: null
          },
          {
            id: 72,
            parentId: 45,
            text: '日期字段Datefiled filter',
            uuid: '68e3673a-e4ed-43cb-a751-4ef663b0fedf',
            children: null
          },
          {
            id: 73,
            parentId: 45,
            text: '简单登录逻辑',
            uuid: 'efcc8630-9a9d-4465-9bc5-8ad959c3b6c3',
            children: null
          },
          {
            id: 74,
            parentId: 45,
            text: '有效使用Django的QuerySet',
            uuid: 'f4b143f8-2870-4bc7-bf52-861dc8ba8b1b',
            children: null
          },
          {
            id: 75,
            parentId: 45,
            text: '合并多个QuerySet',
            uuid: 'f02086ea-770b-4306-a8a9-6f460693dad7',
            children: null
          },
          {
            id: 76,
            parentId: 45,
            text: '外部py脚本使用django model',
            uuid: '48ef41dc-5d0f-4cac-9939-3142feb41065',
            children: null
          },
          {
            id: 77,
            parentId: 45,
            text: '在model中使用sql',
            uuid: '156af7f7-4e5a-4cb7-b5ec-a54c441c95b3',
            children: null
          },
          {
            id: 78,
            parentId: 45,
            text: '反向从已有数据库生成models',
            uuid: 'adfb36ba-90d2-4275-a6c9-4f3904f96a94',
            children: null
          },
          {
            id: 79,
            parentId: 45,
            text: 'Ajax POST CSRF问题',
            uuid: '3342b715-1cc9-4978-9522-9abdd6024b61',
            children: null
          },
          {
            id: 80,
            parentId: 45,
            text: 'DB路由',
            uuid: '991704ba-ece3-46ff-97ca-07120c4829a9',
            children: null
          },
          {
            id: 81,
            parentId: 45,
            text: '在Django中使用webpack',
            uuid: '321db4f1-9cb1-4485-90fe-651b67b824b4',
            children: null
          },
          {
            id: 82,
            parentId: 45,
            text: 'Django使用dwebsocket',
            uuid: '7404faf8-a453-4aed-aada-4f81ef132135',
            children: null
          },
          {
            id: 83,
            parentId: 45,
            text: '创建django项目并部署的check point',
            uuid: 'e7ae22b3-df0b-4d1b-81db-a9c7b64b7785',
            children: null
          },
          {
            id: 84,
            parentId: 45,
            text: 'Sqlite迁移到mysql',
            uuid: '464844e9-a961-4e35-bcf4-73cb1ce9d62a',
            children: null
          },
          {
            id: 85,
            parentId: 45,
            text: '并发model select_for_update',
            uuid: 'de665c61-230b-485a-bf67-0ad0c9b2d315',
            children: null
          },
          {
            id: 86,
            parentId: 45,
            text: "Django migrate报错1071, 'Specified key was too long;",
            uuid: '66c494e0-cebd-4587-a158-ebd373b3a9d0',
            children: null
          },
          {
            id: 87,
            parentId: 45,
            text: 'Django migrate AutoField 0 error',
            uuid: '6ba3a12c-d6bd-4bea-9952-14359087a4c2',
            children: null
          },
          {
            id: 88,
            parentId: 45,
            text: 'DjangoUeditor3',
            uuid: '95670585-98ad-4adc-866d-254c24f5d72c',
            children: null
          },
          {
            id: 89,
            parentId: 45,
            text: '本地时区设置',
            uuid: '2353f2c0-497b-4890-9f48-3ccf18b59c57',
            children: null
          },
          {
            id: 90,
            parentId: 45,
            text: 'Docker json decode问题',
            uuid: '12f04e9e-59f6-4599-bb04-c1a385efa7f9',
            children: null
          },
          {
            id: 91,
            parentId: 45,
            text: 'Django 从POST获取文件，使用requests发送文件',
            uuid: '2ec9baa1-9b83-407d-a67d-222dffbad480',
            children: null
          },
          {
            id: 1075,
            parentId: 45,
            text: 'Django和mysqlclient',
            uuid: '4a1a818e-e13e-49f1-94bd-a2482323e550',
            children: null
          },
          {
            id: 1080,
            parentId: 45,
            text: '使用weasyprint生成pdf',
            uuid: 'a7be7cc1-2894-4348-a994-bf0b6eab4801',
            children: null
          }
        ]
      },
      {
        id: 92,
        parentId: 1,
        text: 'Django xadmin',
        uuid: 'f20bef95-2ca5-4213-8d3a-922a6aa32ab1',
        children: [
          {
            id: 93,
            parentId: 92,
            text: '自定义plugin',
            uuid: 'f3b452a5-f026-4ae5-874d-617185c20f8c',
            children: null
          },
          {
            id: 94,
            parentId: 92,
            text: '自定义view',
            uuid: 'bbc68a3b-6096-492d-9860-9d605ad6569b',
            children: null
          }
        ]
      },
      {
        id: 95,
        parentId: 1,
        text: 'Django REST framework',
        uuid: 'f67771f9-631a-4b20-8e75-c7fce573337b',
        children: null
      },
      {
        id: 96,
        parentId: 1,
        text: 'Python',
        uuid: '8226a3a7-a1af-4194-8c09-06b902565ece',
        children: [
          {
            id: 97,
            parentId: 96,
            text: 'Python installation',
            uuid: '39553600-3793-4148-ad2b-ecc4d6b57984',
            children: null
          },
          {
            id: 98,
            parentId: 96,
            text: 'Basic',
            uuid: '1062c5a3-76ea-45c9-acc0-c82c3b4ffca6',
            children: [
              {
                id: 99,
                parentId: 98,
                text: '类',
                uuid: '0362666b-6572-4c16-ae07-db15fa47b40a',
                children: null
              },
              {
                id: 100,
                parentId: 98,
                text: '迭代器',
                uuid: '67725c91-054a-4691-bfad-926ec8421c70',
                children: null
              },
              {
                id: 101,
                parentId: 98,
                text: '生成器',
                uuid: '9d31400b-b640-4f72-808e-6db93001d240',
                children: null
              },
              {
                id: 102,
                parentId: 98,
                text: '装饰器',
                uuid: 'c5e355ae-9e82-4bdb-ba78-c4728e9e80ea',
                children: null
              },
              {
                id: 103,
                parentId: 98,
                text: 'python import 包、模块',
                uuid: 'ef93ec6b-56fe-4963-83f6-00f71fa4b765',
                children: null
              },
              {
                id: 104,
                parentId: 98,
                text: '标准库',
                uuid: 'd6da4aee-eaa4-4d43-b17f-a4d499bb1f3c',
                children: null
              },
              {
                id: 105,
                parentId: 98,
                text: '字符串',
                uuid: '8efdaab0-17c4-48b0-b4d7-fa7650cc4c61',
                children: null
              },
              {
                id: 106,
                parentId: 98,
                text: '列表',
                uuid: 'f04ff37e-f72d-4d08-9c0c-68a84e0d06f5',
                children: null
              },
              {
                id: 107,
                parentId: 98,
                text: '切片',
                uuid: '943b040d-43bf-40c1-a713-aa7fa8924940',
                children: null
              },
              {
                id: 108,
                parentId: 98,
                text: '栈',
                uuid: '98ed3398-2153-46f5-8a17-cc62d0e29a10',
                children: null
              },
              {
                id: 109,
                parentId: 98,
                text: '元组',
                uuid: 'b08b8e0a-0cac-4c9b-a667-e41ce924f6d5',
                children: null
              },
              {
                id: 110,
                parentId: 98,
                text: '字典',
                uuid: '79ac48af-1798-4310-b5af-f000323065a9',
                children: null
              },
              {
                id: 111,
                parentId: 98,
                text: '枚举实现',
                uuid: 'c6bbbbe8-5756-4194-a1a6-afacabff40f2',
                children: null
              },
              {
                id: 112,
                parentId: 98,
                text: 'map函数',
                uuid: 'ad757d92-4b97-4b91-a1b1-84de1b8f6fbd',
                children: null
              },
              {
                id: 113,
                parentId: 98,
                text: 'filter函数',
                uuid: '45567bff-9647-457e-8164-3a0a162b013f',
                children: null
              },
              {
                id: 114,
                parentId: 98,
                text: 'reduce函数',
                uuid: '1ea3fd72-e64b-435d-bc3f-b23231c0d3e4',
                children: null
              },
              {
                id: 115,
                parentId: 98,
                text: '_ _函数',
                uuid: '9f3c742e-4f89-43c8-ab13-f6d587fe62d4',
                children: null
              },
              {
                id: 116,
                parentId: 98,
                text: '条件判断，函数（闭包匿名）',
                uuid: '62aae07b-1fea-4122-9e87-778f7583622b',
                children: null
              },
              {
                id: 117,
                parentId: 98,
                text: '异常',
                uuid: 'c6e4ceed-e80b-46cf-948d-c005822ad3ef',
                children: null
              },
              {
                id: 118,
                parentId: 98,
                text: '集合set',
                uuid: 'a3f42e29-d8ea-451c-9ae6-370562db7769',
                children: null
              },
              {
                id: 119,
                parentId: 98,
                text: '堆 heap',
                uuid: '203437e8-2782-4a44-8548-70ae6635d35d',
                children: null
              },
              {
                id: 120,
                parentId: 98,
                text: '文件',
                uuid: 'ee751ab4-f928-416d-9cec-5f97e3c14f8c',
                children: null
              },
              {
                id: 121,
                parentId: 98,
                text: '文件目录操作',
                uuid: '908b583e-ee34-4550-9254-8fc4be5cacd1',
                children: null
              },
              {
                id: 122,
                parentId: 98,
                text: 'Datetime',
                uuid: 'cd13c5cc-4486-41b4-9f0f-fbdf2a633d45',
                children: [
                  {
                    id: 123,
                    parentId: 122,
                    text: 'datetime增加月份',
                    uuid: 'b9aa0ef5-0c98-4cf2-b7a7-879ddb53865b',
                    children: null
                  }
                ]
              },
              {
                id: 124,
                parentId: 98,
                text: 'time',
                uuid: 'd98bf11e-9ff6-4f0b-836e-a7e6c2144ceb',
                children: null
              }
            ]
          },
          {
            id: 125,
            parentId: 96,
            text: '线程 thread/asyncio',
            uuid: '17496e05-8280-4795-8667-ff14443687ec',
            children: null
          },
          {
            id: 126,
            parentId: 96,
            text: 'Groupby',
            uuid: 'f4b954d0-eb6d-433f-852b-0decb20b7393',
            children: null
          },
          {
            id: 127,
            parentId: 96,
            text: 'Pytnon xml',
            uuid: '3777652e-bb55-4ae9-ade4-27073e8f981c',
            children: null
          },
          {
            id: 128,
            parentId: 96,
            text: '正则re',
            uuid: 'd15bb94d-4aa2-4862-9572-a43929cd38c2',
            children: null
          },
          {
            id: 129,
            parentId: 96,
            text: 'SQL',
            uuid: '2b48ef8c-8fe2-4774-b9df-f3bcd8ff4dd6',
            children: null
          },
          {
            id: 130,
            parentId: 96,
            text: 'oracle连接',
            uuid: 'c0d73513-c017-4ac2-8355-4753f2fc0e4c',
            children: null
          },
          {
            id: 131,
            parentId: 96,
            text: 'wsgi',
            uuid: 'bf63f9a1-2618-4cbb-b1cb-4b2cc7367c09',
            children: null
          },
          {
            id: 132,
            parentId: 96,
            text: 'gunicorn',
            uuid: '84bd9214-77f5-4fc3-9987-dfc8ed9da4ae',
            children: null
          },
          {
            id: 133,
            parentId: 96,
            text: 'mongoDB driver',
            uuid: 'd129bdc7-8476-40ef-ba37-70123c8c33a1',
            children: null
          },
          {
            id: 134,
            parentId: 96,
            text: 'xlwt',
            uuid: '0b090fd1-6f30-443e-ab85-2e4c0c766e74',
            children: null
          },
          {
            id: 135,
            parentId: 96,
            text: 'paramiko',
            uuid: 'f8164a39-e314-438b-ac80-e134ff182192',
            children: null
          },
          {
            id: 136,
            parentId: 96,
            text: 'pdfminer',
            uuid: '005c8cdc-1dca-4f7e-a590-d3f6c1b1b53f',
            children: null
          },
          {
            id: 137,
            parentId: 96,
            text: '发送http request / POST',
            uuid: 'e6f081dc-caac-4210-94d8-7265a303c562',
            children: [
              {
                id: 138,
                parentId: 137,
                text: '发送接收json数据例子',
                uuid: '6809f3c1-5c62-40ab-9316-d5c4b8b8702a',
                children: null
              }
            ]
          },
          {
            id: 139,
            parentId: 96,
            text: 'py源文件编码问题',
            uuid: 'ffa0dd1c-981e-4010-8611-f8bb3b060e5d',
            children: null
          },
          {
            id: 140,
            parentId: 96,
            text: 'smtplib, email邮件发送',
            uuid: '5d5a5e6a-4642-4bed-8fd2-4fb391239c3a',
            children: null
          },
          {
            id: 141,
            parentId: 96,
            text: '读取properties文件',
            uuid: 'b7410c3e-ff0d-409a-a9ba-88e0978593db',
            children: null
          },
          {
            id: 142,
            parentId: 96,
            text: 'urllib & urllib2 & httplib',
            uuid: 'a3fdd06c-7d19-41c9-b7f6-9b95cdd0b251',
            children: null
          },
          {
            id: 143,
            parentId: 96,
            text: '发送短信实例',
            uuid: 'eb09ec93-8ba8-4e0e-8b6d-756717ad75e8',
            children: null
          },
          {
            id: 144,
            parentId: 96,
            text: 'python解析XML成Dictionary',
            uuid: '3bb8b519-7edf-47e1-bbff-35bad7ef9f22',
            children: null
          },
          {
            id: 145,
            parentId: 96,
            text: 'PIL Python Image Library',
            uuid: 'a8c805af-017f-46aa-8549-b5382a8b40e4',
            children: null
          },
          {
            id: 146,
            parentId: 96,
            text: 'SimpleHTTPServer',
            uuid: 'fea5d35f-766d-49c4-bffb-a33b913af00e',
            children: null
          },
          {
            id: 147,
            parentId: 96,
            text: '使用Setuptools打包',
            uuid: 'fdb1ba9f-779a-42e2-ad00-12294e4a5523',
            children: null
          },
          {
            id: 1160,
            parentId: 96,
            text: '使用selenium操作浏览器',
            uuid: '52ff52a4-354c-4421-b18e-7a5c11f6507a',
            children: null
          },
          {
            id: 1191,
            parentId: 96,
            text: 'zipfile in memory',
            uuid: 'cea2e417-8114-4b67-9cda-039ffe7e32cf',
            children: null
          }
        ]
      },
      {
        id: 148,
        parentId: 1,
        text: 'Python Tkinter图形编程',
        uuid: '1c72be1d-1a28-45da-9df1-8cc055e42a3d',
        children: null
      },
      {
        id: 149,
        parentId: 1,
        text: 'Python PIL(Pillow)',
        uuid: 'a852cd48-987e-4b96-819a-c4fff1babe02',
        children: null
      },
      {
        id: 150,
        parentId: 1,
        text: 'Ngrok内网穿透',
        uuid: 'cf62957f-2cd8-4e1d-8767-228582df0ec7',
        children: [
          {
            id: 151,
            parentId: 150,
            text: 'https设置',
            uuid: '5829c7b7-4969-481e-952b-bd435d5cbe5e',
            children: null
          }
        ]
      },
      {
        id: 152,
        parentId: 1,
        text: 'Snakemaker',
        uuid: '2823be53-627f-4c4d-923a-701342ff38d3',
        children: [
          {
            id: 153,
            parentId: 152,
            text: 'rule',
            uuid: 'f5e5487b-088a-4fab-bf0d-d55a02ebcb87',
            children: null
          }
        ]
      },
      {
        id: 154,
        parentId: 1,
        text: 'Jupyter',
        uuid: '5252b38e-0cd7-4afd-a8f3-28f2f4b2a54a',
        children: null
      },
      {
        id: 155,
        parentId: 1,
        text: 'Numpy',
        uuid: 'ba095ae2-e909-4d8e-b7c4-7d12f9d2ff1e',
        children: null
      },
      {
        id: 156,
        parentId: 1,
        text: 'PyCharm',
        uuid: 'a270ec42-ba46-42a3-b6b1-02906548619b',
        children: null
      },
      {
        id: 157,
        parentId: 1,
        text: 'IDEA 14.1.4',
        uuid: 'f77d77e5-8df6-49e1-b1f0-b8aba698ac46',
        children: null
      },
      {
        id: 158,
        parentId: 1,
        text: 'Airflow',
        uuid: 'cb730eaf-08b6-4b48-8720-a1667b8e6a86',
        children: null
      },
      {
        id: 159,
        parentId: 1,
        text: 'PHP 5',
        uuid: '5040d86f-9b4a-4eab-a694-8e84eaa7cd2a',
        children: [
          {
            id: 160,
            parentId: 159,
            text: 'php常量',
            uuid: 'f97d0246-1f6c-40fb-a759-02bb7b1e9427',
            children: null
          },
          {
            id: 161,
            parentId: 159,
            text: '自定义常量',
            uuid: '906fe107-9208-4d65-b11f-99996d283b5f',
            children: null
          },
          {
            id: 162,
            parentId: 159,
            text: '变量',
            uuid: 'e117af9c-ebb8-434b-aa97-4e3472ebbca9',
            children: null
          },
          {
            id: 163,
            parentId: 159,
            text: '数组',
            uuid: '3f892e7f-8134-40d1-b87f-24777047f03d',
            children: null
          },
          {
            id: 164,
            parentId: 159,
            text: '关联数组（字典）',
            uuid: '9886f5f6-022c-4717-b61e-4a4bbf129b2f',
            children: null
          },
          {
            id: 165,
            parentId: 159,
            text: '类，对象，接口',
            uuid: 'ffeb010a-f55b-4f2f-a258-9a7141312a24',
            children: null
          },
          {
            id: 166,
            parentId: 159,
            text: '操作符',
            uuid: '9145a671-60a4-4b1c-8403-d24d7f213cca',
            children: null
          },
          {
            id: 167,
            parentId: 159,
            text: '逻辑判断',
            uuid: '2b4c48ce-3e92-4a10-b155-f874115b47cc',
            children: null
          },
          {
            id: 168,
            parentId: 159,
            text: '位运算',
            uuid: '5989b502-b180-4c26-bf3e-7d756ba1f918',
            children: null
          },
          {
            id: 169,
            parentId: 159,
            text: '逻辑控制',
            uuid: '89fea0bc-b948-4a9e-b45f-f7db1e265d11',
            children: null
          },
          {
            id: 170,
            parentId: 159,
            text: '函数',
            uuid: '4b9148c0-3db0-4a59-bfe5-e299eb633264',
            children: null
          },
          {
            id: 171,
            parentId: 159,
            text: '错误处理',
            uuid: 'd844907c-5ee3-43c6-bf94-64e2c4dd49df',
            children: null
          },
          {
            id: 172,
            parentId: 159,
            text: '字符串正则',
            uuid: 'f04ca68c-dfe5-4cc9-a9a9-ef0c8237bbff',
            children: null
          },
          {
            id: 173,
            parentId: 159,
            text: 'JSON',
            uuid: 'a29a75c0-7279-42c5-961d-67d84cba92af',
            children: null
          },
          {
            id: 174,
            parentId: 159,
            text: 'WEB',
            uuid: '7014216d-f273-4fc1-be3f-0885d5941beb',
            children: [
              {
                id: 175,
                parentId: 174,
                text: '网页加密授权',
                uuid: 'fa12c008-f820-4c13-b199-1e448a5adf72',
                children: null
              },
              {
                id: 176,
                parentId: 174,
                text: '文件上传',
                uuid: '87b394c9-644b-4fce-b161-9762775d0c88',
                children: null
              },
              {
                id: 177,
                parentId: 174,
                text: 'Session处理',
                uuid: '38fa52eb-1a98-4aa0-b8e0-aa4acc1fe27a',
                children: null
              },
              {
                id: 178,
                parentId: 174,
                text: '发送http请求',
                uuid: '318c1fa0-47b9-4680-9dcf-d9606c13d412',
                children: null
              }
            ]
          },
          {
            id: 179,
            parentId: 159,
            text: 'PHP安全',
            uuid: 'f86376d6-8b2f-4983-a2c2-f85bbd66568b',
            children: null
          },
          {
            id: 180,
            parentId: 159,
            text: 'Smarty模版',
            uuid: 'de3165f8-f85e-465d-b259-509467fe0daf',
            children: null
          },
          {
            id: 181,
            parentId: 159,
            text: 'Magpie RSS',
            uuid: 'a7f92c74-c14f-4305-9bb7-f1e8313b544b',
            children: null
          },
          {
            id: 182,
            parentId: 159,
            text: 'NuSOAP',
            uuid: '95c26d28-29be-4197-84f2-f43cf05b9780',
            children: null
          },
          {
            id: 183,
            parentId: 159,
            text: '网络',
            uuid: '458acd27-fa17-40f7-87a0-f2a5f32d3ace',
            children: null
          },
          {
            id: 184,
            parentId: 159,
            text: 'LDAP',
            uuid: 'cb144fc4-2c30-44b8-8e25-f7091821845a',
            children: null
          },
          {
            id: 185,
            parentId: 159,
            text: 'SQLITE',
            uuid: 'ad631659-f1fb-4421-8712-614cfc7edf2b',
            children: null
          },
          {
            id: 186,
            parentId: 159,
            text: 'MYSQL连接',
            uuid: '1bd2ce3a-291b-41b0-98e1-26fc13170f17',
            children: null
          },
          {
            id: 187,
            parentId: 159,
            text: 'MYSQLi',
            uuid: 'c4f7ab91-fae4-4809-9db6-279a04f59dce',
            children: null
          },
          {
            id: 188,
            parentId: 159,
            text: '文件',
            uuid: 'f9147fa6-a6df-42c8-9eb4-eb1bce683038',
            children: null
          },
          {
            id: 189,
            parentId: 159,
            text: 'PEAR',
            uuid: 'b5bf3b1d-1dab-4d26-9f79-acac73e5ea94',
            children: null
          },
          {
            id: 190,
            parentId: 159,
            text: '日期函数',
            uuid: 'ba59724e-67f4-4c7f-8629-240c05156324',
            children: [
              {
                id: 191,
                parentId: 190,
                text: 'Date类',
                uuid: '1b42a277-eb5d-4cde-9278-ebcbf91d3550',
                children: null
              }
            ]
          },
          {
            id: 192,
            parentId: 159,
            text: 'date日期格式化',
            uuid: '51e70ac4-debf-49f4-9b15-db177dabde02',
            children: null
          },
          {
            id: 193,
            parentId: 159,
            text: 'date报警告错误',
            uuid: 'c758c99f-fcfc-4dfe-a0f3-23a7afd41657',
            children: null
          },
          {
            id: 194,
            parentId: 159,
            text: '微信公众平台后端php实例',
            uuid: '7df0f161-5c9e-4f25-843a-760db17a7221',
            children: null
          }
        ]
      },
      {
        id: 195,
        parentId: 1,
        text: 'Elastic Search',
        uuid: '0448b7e9-0380-4823-847d-31a238f3b507',
        children: [
          {
            id: 196,
            parentId: 195,
            text: 'Python package',
            uuid: '09c2ee76-d087-4b70-ac1c-9b7ccddda27f',
            children: null
          },
          {
            id: 197,
            parentId: 195,
            text: '注意',
            uuid: '6fd7daec-efa1-4913-a1b6-37a456c080bd',
            children: null
          },
          {
            id: 1068,
            parentId: 195,
            text: 'Django+Elasticsearch',
            uuid: '180ca8d6-2928-4c28-b198-bfddc602223b',
            children: null
          }
        ]
      },
      {
        id: 198,
        parentId: 1,
        text: 'MariaDB(MySQL)',
        uuid: '5f19b3b7-fefb-479f-9ddb-291654b14bba',
        children: [
          {
            id: 1161,
            parentId: 198,
            text: '常见sql语句',
            uuid: '6058527b-0ba5-44cf-811e-59ca3977c9fa',
            children: null
          },
          {
            id: 199,
            parentId: 198,
            text: 'Basic',
            uuid: '0f66e61e-35de-4339-bce6-0377e1a5ef70',
            children: null
          },
          {
            id: 1172,
            parentId: 198,
            text: '锁',
            uuid: '45372562-6e41-470a-a27d-a5111d628cd9',
            children: null
          },
          {
            id: 200,
            parentId: 198,
            text: 'Mysql中日期处理',
            uuid: '51be76e2-0ce1-4b7e-8392-2cda35b79465',
            children: null
          },
          {
            id: 201,
            parentId: 198,
            text: 'load file',
            uuid: 'de3a2535-ebbe-4877-8a03-7c700a1e74b1',
            children: null
          },
          {
            id: 202,
            parentId: 198,
            text: 'Django mysql 8 密码问题',
            uuid: '2d62f7fa-a718-4b2d-85e1-f6ccfa9d1f7f',
            children: null
          },
          {
            id: 203,
            parentId: 198,
            text: 'mysql 5.7修改密码',
            uuid: '6dc86ba0-2517-4cd2-b0f0-bffad351b5ec',
            children: null
          },
          {
            id: 204,
            parentId: 198,
            text: 'total number of locks exceeds the lock table size问题',
            uuid: '4d7a1d82-ae59-4f7a-92da-74e9cfd3d07d',
            children: null
          },
          {
            id: 205,
            parentId: 198,
            text: 'my.ini优化配置',
            uuid: 'e2b6f735-249e-4310-ad4c-5abf7747286e',
            children: null
          },
          {
            id: 206,
            parentId: 198,
            text: '数据库迁移',
            uuid: '1b7e12f6-16cf-4fb0-9888-89769ebdcb0a',
            children: null
          },
          {
            id: 207,
            parentId: 198,
            text: 'lock wait timeout exceeded; try restarting transaction',
            uuid: 'cc1b4ab1-465c-424c-9dc7-7da6039cc061',
            children: null
          },
          {
            id: 1071,
            parentId: 198,
            text: 'Index 索引',
            uuid: '96c45c18-4d3f-4a6e-b367-60a0df152d5a',
            children: null
          },
          {
            id: 1151,
            parentId: 198,
            text: '主从备份设置',
            uuid: '61b4b245-70b6-47e5-885a-5ad8772d57e0',
            children: [
              {
                id: 1152,
                parentId: 1151,
                text: 'slave常见错误',
                uuid: '40934a63-1f5b-4450-9c64-1885b8729bbb',
                children: null
              }
            ]
          },
          {
            id: 1171,
            parentId: 198,
            text: '性能优化',
            uuid: 'b73652b6-288d-4085-8276-2010d0d24e74',
            children: null
          }
        ]
      },
      {
        id: 1185,
        parentId: 1,
        text: 'Notitle',
        uuid: 'a54eef6f-015e-4d22-bc72-9d11f39b25ac',
        children: null
      },
      {
        id: 208,
        parentId: 1,
        text: 'Postgres',
        uuid: '88c248d1-bda9-4403-a939-6bfb2497a200',
        children: null
      },
      {
        id: 209,
        parentId: 1,
        text: 'Git',
        uuid: '1da9e8ed-6538-4b7b-92a1-510a25aa79c8',
        children: [
          {
            id: 210,
            parentId: 209,
            text: 'Basic',
            uuid: '6f65877b-55e8-42a9-9ed3-5b3634e44530',
            children: null
          },
          {
            id: 211,
            parentId: 209,
            text: 'Alias',
            uuid: 'b9cf8973-76ab-44d1-acd5-27002cf03376',
            children: null
          },
          {
            id: 212,
            parentId: 209,
            text: '流程例子',
            uuid: 'd9ccd82a-89ee-4518-b339-f2b7951715ff',
            children: null
          },
          {
            id: 213,
            parentId: 209,
            text: 'Git一些配置',
            uuid: 'ddbf6e38-fca8-4dd4-b998-9ebaad5f0c80',
            children: null
          },
          {
            id: 214,
            parentId: 209,
            text: '减少.git目录文件',
            uuid: 'ff239bcc-b262-46cd-b5fa-23d89e535771',
            children: null
          },
          {
            id: 215,
            parentId: 209,
            text: 'gitlab清除以前的commit',
            uuid: 'fe82d722-637f-4d1f-a3e9-d08a11ab82d8',
            children: null
          },
          {
            id: 216,
            parentId: 209,
            text: '不staging某些本地改动的文件',
            uuid: '32ec3317-6997-4a5a-aae1-22b486ba44ed',
            children: null
          },
          {
            id: 1136,
            parentId: 209,
            text: 'gitlab数据备份与恢复',
            uuid: '09c7ec22-f716-4505-86f1-069e9a9bbdc3',
            children: null
          }
        ]
      },
      {
        id: 217,
        parentId: 1,
        text: 'Gitlab runner',
        uuid: '9c41a4c3-dfbb-4de8-8e27-e06b16224a67',
        children: [
          {
            id: 218,
            parentId: 217,
            text: '.gitlab-ci.yml例子',
            uuid: 'e95b34ff-7744-4de6-b8f8-8517785c3141',
            children: null
          }
        ]
      },
      {
        id: 219,
        parentId: 1,
        text: 'Svn',
        uuid: 'ce5de3fb-e619-4035-a894-f48a2bc50b5e',
        children: null
      },
      {
        id: 220,
        parentId: 1,
        text: 'Firewalld（CentOS）',
        uuid: '77c54ada-0ea1-4ede-b32e-2db2b524f919',
        children: null
      },
      {
        id: 221,
        parentId: 1,
        text: 'Bash',
        uuid: 'fba89dea-5a5a-434a-aa92-56421c881d05',
        children: [
          {
            id: 222,
            parentId: 221,
            text: '变量替换',
            uuid: '5a91e3f7-b036-4483-bda7-0afee09340eb',
            children: null
          },
          {
            id: 223,
            parentId: 221,
            text: '运行子shell',
            uuid: 'a83e3117-b343-483f-8c2b-eba5bc5ba6a9',
            children: null
          },
          {
            id: 224,
            parentId: 221,
            text: 'echo',
            uuid: '78050a11-bf57-48ed-993a-3909a4843b76',
            children: null
          },
          {
            id: 225,
            parentId: 221,
            text: 'getopts用法',
            uuid: '00fe2abc-7151-4c03-9902-a826868ec03d',
            children: null
          },
          {
            id: 226,
            parentId: 221,
            text: '终止某个进程kill -9',
            uuid: 'a143ce18-ed34-440e-bea6-12ea3bc1770a',
            children: null
          },
          {
            id: 1131,
            parentId: 221,
            text: '循环遍历文件目录',
            uuid: '35add31a-5260-40a5-b70d-42340205d92e',
            children: null
          },
          {
            id: 1150,
            parentId: 221,
            text: '使用trap捕获中断',
            uuid: '0be729a3-385c-453b-91df-f71c943c3958',
            children: null
          }
        ]
      },
      {
        id: 227,
        parentId: 1,
        text: 'Vi',
        uuid: '8af26277-0765-4cb8-b126-87694425971c',
        children: null
      },
      {
        id: 228,
        parentId: 1,
        text: 'Httpd',
        uuid: 'b31e0fe3-5427-4b9e-a1e0-ba58562e89a7',
        children: [
          {
            id: 229,
            parentId: 228,
            text: 'Basic',
            uuid: 'beff6153-d0a3-48db-bd8f-1122b955a376',
            children: [
              {
                id: 230,
                parentId: 229,
                text: '反向代理实例',
                uuid: 'd1d4b912-f22e-41bf-bcae-c440b1fbc528',
                children: null
              }
            ]
          },
          {
            id: 231,
            parentId: 228,
            text: 'httpd.conf最小配置',
            uuid: '2e2df20b-3f4a-45ac-8205-58c8dbae99a2',
            children: null
          },
          {
            id: 232,
            parentId: 228,
            text: 'Django integration',
            uuid: '415165db-442c-46c9-8a2b-d688a7e0f9b2',
            children: null
          },
          {
            id: 233,
            parentId: 228,
            text: 'Window server Django setup',
            uuid: '5c947573-3743-4c7a-9a71-ac829aa40160',
            children: null
          },
          {
            id: 234,
            parentId: 228,
            text: 'HTTPS SSL配置',
            uuid: '0a814f49-6539-4089-9756-7f32e220ccd2',
            children: null
          },
          {
            id: 235,
            parentId: 228,
            text: 'HTTPS SSL配置 jks',
            uuid: 'cbb93ae9-a628-48ac-a0ba-90ddbe9544ac',
            children: null
          }
        ]
      },
      {
        id: 236,
        parentId: 1,
        text: 'Maven',
        uuid: '43341f6d-a6e6-4584-8768-dac1f2c21fa4',
        children: [
          {
            id: 237,
            parentId: 236,
            text: '项目结构例子',
            uuid: '3f5cb7d1-2e9f-4079-bed2-df32d7afc148',
            children: null
          },
          {
            id: 238,
            parentId: 236,
            text: 'Pom结构',
            uuid: '0af058ac-ba30-4085-aac5-c731623fdcad',
            children: [
              {
                id: 239,
                parentId: 238,
                text: 'Profiles',
                uuid: '308456b5-4160-43e1-96e5-607f9685c10b',
                children: null
              },
              {
                id: 240,
                parentId: 238,
                text: 'Dependency scope',
                uuid: 'c354113e-60ea-4051-9bb7-397882582d05',
                children: null
              },
              {
                id: 241,
                parentId: 238,
                text: 'dependencyManagement',
                uuid: '837eac7a-cc0f-4c11-9070-33d69904df89',
                children: null
              },
              {
                id: 242,
                parentId: 238,
                text: '父pom文件',
                uuid: '7d952887-c36f-4260-a44a-70692cd70956',
                children: null
              }
            ]
          },
          {
            id: 243,
            parentId: 236,
            text: '常用命令',
            uuid: '61d62506-9ffd-45d9-ada6-333f65365ff9',
            children: [
              {
                id: 244,
                parentId: 243,
                text: '加密密码',
                uuid: '650b20d0-5d0d-477b-b120-49c4e8ac6d4b',
                children: null
              }
            ]
          },
          {
            id: 245,
            parentId: 236,
            text: 'settings.xml',
            uuid: '5cac25a2-6b19-497c-8dae-7c234ec8ed18',
            children: null
          },
          {
            id: 246,
            parentId: 236,
            text: 'Plugin',
            uuid: '6605232c-ef81-4ab4-acdf-31000ca0924e',
            children: null
          }
        ]
      },
      {
        id: 247,
        parentId: 1,
        text: 'Wicket',
        uuid: 'f8618f6b-1d6c-4cb2-a31a-452c1729a295',
        children: [
          {
            id: 248,
            parentId: 247,
            text: 'wicket/maven/intellij IDEA集成',
            uuid: '40c32908-d701-4407-91f5-d428d5cef8ae',
            children: null
          },
          {
            id: 249,
            parentId: 247,
            text: 'Basic',
            uuid: 'c5387dbe-0f27-4b3e-b8a8-a635db21e743',
            children: null
          },
          {
            id: 250,
            parentId: 247,
            text: 'wicket标签',
            uuid: 'ece0751e-a1c0-48ab-9e13-74ed3c18acc0',
            children: null
          },
          {
            id: 251,
            parentId: 247,
            text: '模版化',
            uuid: '88ca3210-74d8-4a9e-afeb-ed07fb67e265',
            children: null
          },
          {
            id: 252,
            parentId: 247,
            text: 'AttributeModifier',
            uuid: '7439deef-e893-4b4e-8fb2-8d8e28a50ae8',
            children: null
          },
          {
            id: 253,
            parentId: 247,
            text: '组件生命周期',
            uuid: 'a48dfc91-3bea-41c9-8c3c-d10d5c9a199e',
            children: null
          },
          {
            id: 254,
            parentId: 247,
            text: 'Stateful / Stateless',
            uuid: '00d0fffa-11b4-4e92-947e-5f86174e5d21',
            children: null
          },
          {
            id: 255,
            parentId: 247,
            text: 'Http Request/Response',
            uuid: '5d8e3bca-c46b-407f-a9d0-46c3b95c2e31',
            children: null
          },
          {
            id: 256,
            parentId: 247,
            text: 'Link & URL generation',
            uuid: 'ee5fde1f-45ca-4da6-a489-ec74f447288e',
            children: null
          },
          {
            id: 257,
            parentId: 247,
            text: 'Model & Form',
            uuid: '1677db6e-3628-4e25-9552-838babba1690',
            children: null
          }
        ]
      },
      {
        id: 258,
        parentId: 1,
        text: 'Tomcat',
        uuid: '95fc7fce-14fc-426c-976e-9fe297bf8b62',
        children: [
          {
            id: 259,
            parentId: 258,
            text: '最简单webapp',
            uuid: '509540a2-3365-4145-b605-03a471c1019a',
            children: null
          },
          {
            id: 260,
            parentId: 258,
            text: 'web.xml',
            uuid: 'b870e707-bc75-4655-9a32-750be785727e',
            children: [
              {
                id: 261,
                parentId: 260,
                text: '<icon>',
                uuid: 'e066f935-0c08-4ec6-9fa7-69a5486789f5',
                children: null
              },
              {
                id: 262,
                parentId: 260,
                text: '<display-name>，<description>',
                uuid: '482b867d-d8ff-4cf5-b850-6e32d49312e4',
                children: null
              },
              {
                id: 263,
                parentId: 260,
                text: '<context-param>',
                uuid: '5fb28320-3f48-4c78-a82a-c87fc1e10b9d',
                children: null
              },
              {
                id: 264,
                parentId: 260,
                text: '<filter>，<filter-mapping>',
                uuid: 'a5071622-b103-4789-8386-20ccd6cba793',
                children: null
              },
              {
                id: 265,
                parentId: 260,
                text: '<listener>',
                uuid: '647c47f3-dcef-457e-84b6-9fbbaee7aee2',
                children: null
              },
              {
                id: 266,
                parentId: 260,
                text: '<servlet>、<servlet-mapping>',
                uuid: '0e873bf8-01e6-42c5-8ebf-e86a73fe1332',
                children: null
              },
              {
                id: 267,
                parentId: 260,
                text: '<session-cofing>',
                uuid: '3d81888c-7ff1-4fe4-8c4c-c92396990c9e',
                children: null
              },
              {
                id: 268,
                parentId: 260,
                text: '<mime-mapping>',
                uuid: '3730ce15-9b7a-497d-8dca-a741201d11fa',
                children: null
              },
              {
                id: 269,
                parentId: 260,
                text: '<welcome-file-list>',
                uuid: '1595a675-b77e-48c4-a7b5-fc2389ab7f37',
                children: null
              },
              {
                id: 270,
                parentId: 260,
                text: '<error-page>',
                uuid: '6be5487e-0556-42eb-b68b-8a675c041091',
                children: null
              },
              {
                id: 271,
                parentId: 260,
                text: '<jsp-config>',
                uuid: '34fd7725-cf5c-40d5-8a48-de126cb0099d',
                children: null
              },
              {
                id: 272,
                parentId: 260,
                text: '<resource-env-ref>',
                uuid: '4e4bdeee-8cfe-4929-b122-aa1b387e8787',
                children: null
              },
              {
                id: 273,
                parentId: 260,
                text: '<resource-ref>',
                uuid: 'c0990e25-2f91-4020-8669-07335dab81ab',
                children: null
              },
              {
                id: 274,
                parentId: 260,
                text: '<login-config>',
                uuid: '7d88d22e-f5dc-4495-bb23-796c5f98857a',
                children: null
              },
              {
                id: 275,
                parentId: 260,
                text: '<security-role>',
                uuid: '2235d0c9-ef94-43b1-9ea9-e3310da128ce',
                children: null
              }
            ]
          },
          {
            id: 276,
            parentId: 258,
            text: '数据库配置（tomcat8）',
            uuid: '01d01f17-240f-419b-beca-e2dadd6dba83',
            children: null
          },
          {
            id: 277,
            parentId: 258,
            text: '不同端口多个实例(tomcat8)',
            uuid: '62123874-e607-493e-9282-3c132e37ae35',
            children: null
          }
        ]
      },
      {
        id: 278,
        parentId: 1,
        text: 'MyBatis',
        uuid: '72873ecd-4b61-4ef1-823b-4ebbe9c384d2',
        children: null
      },
      {
        id: 279,
        parentId: 1,
        text: 'Hadoop',
        uuid: 'a46a70c7-2688-48a9-8a25-c30b5547c102',
        children: [
          {
            id: 280,
            parentId: 279,
            text: 'Proxyuser',
            uuid: 'eda89b70-6246-4571-996f-8821641aa2fe',
            children: null
          },
          {
            id: 281,
            parentId: 279,
            text: 'httpfs-site.xml',
            uuid: 'c5d8ec23-dd3b-40ca-9919-d6a8fb961d84',
            children: null
          },
          {
            id: 282,
            parentId: 279,
            text: 'core-site.xml',
            uuid: 'dba1e58d-2e4d-41db-936c-41c80472fbb5',
            children: null
          },
          {
            id: 283,
            parentId: 279,
            text: 'hdfs-site.xml',
            uuid: 'a3231a3b-d463-4e54-9b93-23b753987cec',
            children: null
          },
          {
            id: 284,
            parentId: 279,
            text: 'yarn-site.xml',
            uuid: 'dc1d1348-3939-4afd-9c71-fd0f7fae942a',
            children: null
          },
          {
            id: 285,
            parentId: 279,
            text: 'mapred-site.xml',
            uuid: 'd07cc328-9dda-4926-a01b-810b9e07805a',
            children: null
          },
          {
            id: 286,
            parentId: 279,
            text: 'hdfs命令',
            uuid: '7f2ee6cd-b213-48f7-b000-d1cb972595d0',
            children: null
          },
          {
            id: 287,
            parentId: 279,
            text: '集群部署要点',
            uuid: 'fe3bda3f-a455-4219-9c5a-d3f361194d03',
            children: null
          },
          {
            id: 288,
            parentId: 279,
            text: '增加删除节点',
            uuid: 'e067dc29-100f-4929-8c38-c55f98dc2256',
            children: null
          }
        ]
      },
      {
        id: 289,
        parentId: 1,
        text: 'Spark',
        uuid: '5b5e36c4-2dfd-4c10-9cba-0f074bc85506',
        children: [
          {
            id: 290,
            parentId: 289,
            text: 'Without hadoop',
            uuid: '3604d572-57d9-4a58-9ae0-e4147e0fe948',
            children: null
          },
          {
            id: 291,
            parentId: 289,
            text: 'With hadoop',
            uuid: '674d0a93-e0e8-4af1-9c40-6af7821914a4',
            children: null
          },
          {
            id: 292,
            parentId: 289,
            text: '运行及配置文件',
            uuid: 'c9eb0b2f-afe0-445e-9b37-a24742d822c6',
            children: [
              {
                id: 293,
                parentId: 292,
                text: 'start-all.sh',
                uuid: '78913c85-1373-491e-a279-a29831054f1e',
                children: null
              },
              {
                id: 294,
                parentId: 292,
                text: 'spark-env.sh',
                uuid: '23041f8e-552c-49d2-8d3f-513b60138eef',
                children: null
              },
              {
                id: 295,
                parentId: 292,
                text: 'spark-defaults.conf',
                uuid: 'd319a5ae-7c20-479d-9396-560798f60988',
                children: null
              }
            ]
          }
        ]
      },
      {
        id: 296,
        parentId: 1,
        text: 'Hive',
        uuid: '1b98a84d-c85e-4978-ad82-d36cc2cd997c',
        children: [
          {
            id: 297,
            parentId: 296,
            text: '使用spark engine',
            uuid: '6cef632b-1b8d-43fe-a862-e1ec4f3ccbf0',
            children: null
          },
          {
            id: 298,
            parentId: 296,
            text: 'ACID Transaction Manager',
            uuid: '1d367f3c-4661-4258-80b0-79d1fd2394ef',
            children: null
          },
          {
            id: 299,
            parentId: 296,
            text: '数据类型',
            uuid: '721bc875-32c0-4da8-b1c7-67d30f66472a',
            children: [
              {
                id: 300,
                parentId: 299,
                text: 'Cast强转问题',
                uuid: 'ad776926-34f9-4c8a-ba61-927a5962c9b9',
                children: null
              }
            ]
          },
          {
            id: 301,
            parentId: 296,
            text: '表，外部表，分区，桶',
            uuid: 'b9b9da18-260b-438a-8792-2586f9700dfd',
            children: null
          },
          {
            id: 302,
            parentId: 296,
            text: 'Sql语句',
            uuid: '083382a8-8ae5-444d-b47c-6783f2b5583f',
            children: null
          },
          {
            id: 303,
            parentId: 296,
            text: '例子',
            uuid: 'f145b9c7-0755-4366-8f52-63c229d9f6dc',
            children: null
          }
        ]
      },
      {
        id: 304,
        parentId: 1,
        text: 'Beeline',
        uuid: '3d6b2ea9-7c8f-4bdd-8541-6612b555a9ba',
        children: null
      },
      {
        id: 305,
        parentId: 1,
        text: 'HBase',
        uuid: '4835c00f-01c7-49ad-8a64-70432672e1fa',
        children: [
          {
            id: 306,
            parentId: 305,
            text: 'Basic',
            uuid: '39986f70-35b5-4048-8b57-78017e62b489',
            children: null
          }
        ]
      },
      {
        id: 307,
        parentId: 1,
        text: 'Zookeeper',
        uuid: 'ffcc6e57-d74b-4f70-b6c7-0789d15ae17a',
        children: [
          {
            id: 308,
            parentId: 307,
            text: 'Paxos',
            uuid: 'd5f6b1c5-041f-48fd-a6fe-43053fb15523',
            children: [
              {
                id: 309,
                parentId: 308,
                text: 'Basic paxos',
                uuid: 'c5cf738e-79e7-48ab-87e3-aa83c084c430',
                children: null
              },
              {
                id: 310,
                parentId: 308,
                text: 'Multi paxos/Classic paxos',
                uuid: 'd0a48fdb-5be0-4573-8f6d-97a0b12e832d',
                children: null
              },
              {
                id: 311,
                parentId: 308,
                text: 'Fast paxos',
                uuid: '1e2b25ea-dfbb-4f31-a3c3-db1c7affea55',
                children: null
              },
              {
                id: 312,
                parentId: 308,
                text: 'Raft算法',
                uuid: '6f735361-f25c-4ead-b534-c39addc09290',
                children: null
              },
              {
                id: 313,
                parentId: 308,
                text: 'ZAB',
                uuid: 'aade50f7-b8fa-4bd8-91db-022ccc9e96a1',
                children: null
              }
            ]
          }
        ]
      },
      {
        id: 314,
        parentId: 1,
        text: 'Kylin',
        uuid: 'a87408bd-34fb-4426-ae67-fe1da7f9ab9c',
        children: [
          {
            id: 315,
            parentId: 314,
            text: 'Model Cube',
            uuid: '1a38d52e-b59f-4023-9208-dcd98a19f1e8',
            children: null
          },
          {
            id: 316,
            parentId: 314,
            text: 'Hybrid Cube',
            uuid: '76d00a24-68d5-4aab-b28c-0717cadbdade',
            children: null
          },
          {
            id: 317,
            parentId: 314,
            text: '修改登录密码',
            uuid: '3eaa4719-6a49-496b-808a-d870767d1406',
            children: null
          },
          {
            id: 318,
            parentId: 314,
            text: '使用REST API',
            uuid: '63fbbbcb-fe64-45e9-839a-f0d64c6c1dc3',
            children: null
          }
        ]
      },
      {
        id: 319,
        parentId: 1,
        text: 'Sqoop2',
        uuid: '60f53564-65be-477b-9112-c477a672cdea',
        children: [
          {
            id: 320,
            parentId: 319,
            text: '常用命令',
            uuid: 'c04f6eef-8cfa-4db4-9995-e66108e1132f',
            children: null
          },
          {
            id: 321,
            parentId: 319,
            text: '从hdfs导出数据到mysql',
            uuid: '4569fc0e-0b5e-4a04-93d7-f29f2dcf3cb2',
            children: null
          }
        ]
      },
      {
        id: 322,
        parentId: 1,
        text: 'Hue',
        uuid: '211e973b-2721-4333-911d-346adf01573e',
        children: [
          {
            id: 323,
            parentId: 322,
            text: '4.4版本',
            uuid: 'd13ea739-e27f-4ef6-ae47-a16a71328fb2',
            children: null
          }
        ]
      },
      {
        id: 324,
        parentId: 1,
        text: 'Spark job server',
        uuid: '01c87ced-32bc-4d0f-991f-1fbfda752733',
        children: [
          {
            id: 325,
            parentId: 324,
            text: 'Context',
            uuid: 'a173a606-51f9-480e-a1b0-5053f4d57ce5',
            children: null
          },
          {
            id: 326,
            parentId: 324,
            text: 'run job',
            uuid: '884c6fa2-7218-481c-b175-eb6ec0da5d1b',
            children: null
          },
          {
            id: 327,
            parentId: 324,
            text: 'Jobserver.conf文件',
            uuid: '5bd2d322-541e-4232-9195-135dfafdae6c',
            children: null
          }
        ]
      },
      {
        id: 328,
        parentId: 1,
        text: 'BigData大数据',
        uuid: 'd99eef5b-115e-419a-8ed9-0165747037f3',
        children: [
          {
            id: 329,
            parentId: 328,
            text: '架构',
            uuid: 'ceeaeffb-1160-4c49-9e8f-77d7278f4221',
            children: null
          },
          {
            id: 330,
            parentId: 328,
            text: '常见相关端口jps进程',
            uuid: '7fa4a2b7-de2b-45e0-b69b-cc32af991940',
            children: null
          },
          {
            id: 331,
            parentId: 328,
            text: 'Notebook Pyspark/findspark',
            uuid: '42d46d42-5661-459c-93a0-d7b695d9b893',
            children: [
              {
                id: 332,
                parentId: 331,
                text: 'collect/count',
                uuid: 'df29378d-f167-4af7-80f9-5dc2dbbbbe49',
                children: null
              },
              {
                id: 333,
                parentId: 331,
                text: 'map函数',
                uuid: 'e3e416a9-96de-45c8-81ba-af16641d2a2b',
                children: null
              },
              {
                id: 334,
                parentId: 331,
                text: 'flatMap',
                uuid: '82934fa4-730c-4a53-b23c-5fe33fe4280a',
                children: null
              },
              {
                id: 335,
                parentId: 331,
                text: 'filter',
                uuid: '3ce4463b-9f69-49e6-90cd-b0606aa0c83a',
                children: null
              },
              {
                id: 336,
                parentId: 331,
                text: 'reduce',
                uuid: '938c466c-4f61-4660-b3cf-7f06c8c2be3f',
                children: null
              },
              {
                id: 337,
                parentId: 331,
                text: 'countByValue',
                uuid: 'd23a5ad9-3e9d-4c91-b52b-a29b074bf7a6',
                children: null
              },
              {
                id: 338,
                parentId: 331,
                text: 'reduceByKey',
                uuid: 'd5feb0a5-7c84-4310-92d2-7ca02cf428a8',
                children: null
              },
              {
                id: 339,
                parentId: 331,
                text: 'sortByKey',
                uuid: '7f59a1fa-07f1-498d-ad1c-dd000db9148d',
                children: null
              },
              {
                id: 340,
                parentId: 331,
                text: 'aggregate',
                uuid: '14b62919-286c-4432-8d51-4f59655fdee6',
                children: null
              },
              {
                id: 341,
                parentId: 331,
                text: 'Hdfs csv，dataframe导入导出hive，mysql',
                uuid: 'd56300eb-6dfd-4db6-95df-8f247f274dcc',
                children: null
              }
            ]
          },
          {
            id: 342,
            parentId: 328,
            text: '命令行spark-shell/pyspark',
            uuid: '313d6e9e-def9-4783-9f5c-32f40f624fbe',
            children: [
              {
                id: 343,
                parentId: 342,
                text: 'Load文件',
                uuid: '7f85f990-2daa-4f74-9297-d56389897a04',
                children: null
              },
              {
                id: 344,
                parentId: 342,
                text: 'count',
                uuid: 'e36bfd31-6d98-4386-a354-a5a1dc1fa514',
                children: null
              },
              {
                id: 345,
                parentId: 342,
                text: 'first',
                uuid: '9fad008d-309f-4239-bf6c-c03e9b8b02aa',
                children: null
              },
              {
                id: 346,
                parentId: 342,
                text: 'map',
                uuid: '063debd0-2da0-4943-9445-6c941c730039',
                children: null
              },
              {
                id: 347,
                parentId: 342,
                text: 'flatMap',
                uuid: '5ea25c0c-d37e-43de-b9e1-5d2613ac1bcb',
                children: null
              },
              {
                id: 348,
                parentId: 342,
                text: 'cache',
                uuid: '66325fac-491e-45f0-8aaa-270f298a84c3',
                children: null
              }
            ]
          },
          {
            id: 349,
            parentId: 328,
            text: '使用job server运行计算',
            uuid: 'c1149386-76e2-47d0-8fde-c71cf8855302',
            children: null
          },
          {
            id: 350,
            parentId: 328,
            text: '分类、回归',
            uuid: '61185d09-081d-43e1-9208-ad134f5df18e',
            children: null
          },
          {
            id: 351,
            parentId: 328,
            text: '聚类',
            uuid: '728b09dd-6397-4072-a5a5-b6dec3e64e86',
            children: null
          },
          {
            id: 352,
            parentId: 328,
            text: '关联',
            uuid: 'e131c0dd-3e54-48a5-bdf7-6be99e01847b',
            children: null
          },
          {
            id: 353,
            parentId: 328,
            text: '时序',
            uuid: '41d43d5d-8905-4c37-a69e-dc1f758e3f42',
            children: null
          }
        ]
      },
      {
        id: 1153,
        parentId: 1,
        text: 'kafka',
        uuid: '6c96375a-ad51-4359-b9d8-7c52278b382d',
        children: null
      },
      {
        id: 1154,
        parentId: 1,
        text: 'kubenetes',
        uuid: 'd0bef9e2-956e-4763-a3d8-1adc86325328',
        children: [
          {
            id: 1158,
            parentId: 1154,
            text: 'kubectl命令',
            uuid: '5008d80d-c57c-4107-b119-e51efdb8c4fa',
            children: null
          }
        ]
      },
      {
        id: 354,
        parentId: 1,
        text: 'Nexus',
        uuid: '3071b729-2ebd-43fc-8cd6-6b8ea1a95165',
        children: null
      },
      {
        id: 355,
        parentId: 1,
        text: 'Nexus3',
        uuid: 'c5c33144-f744-44b8-a14d-896caf7e1dff',
        children: null
      },
      {
        id: 356,
        parentId: 1,
        text: 'Hudson',
        uuid: '84885e21-6526-4372-a8b5-935153c7067e',
        children: null
      },
      {
        id: 357,
        parentId: 1,
        text: 'Jenkins',
        uuid: 'ed6b9799-e3e7-477a-a595-de33b2b011cb',
        children: [
          {
            id: 358,
            parentId: 357,
            text: '简单的用法',
            uuid: '47666de8-3459-4912-b06c-ba22d1d3f472',
            children: null
          },
          {
            id: 359,
            parentId: 357,
            text: '读取Gitlab代码',
            uuid: '7bb2be54-f868-4ec9-9136-af962c0b465a',
            children: null
          },
          {
            id: 360,
            parentId: 357,
            text: '发邮件',
            uuid: '7393bfc5-6323-4ad9-824b-c3b700809307',
            children: null
          },
          {
            id: 361,
            parentId: 357,
            text: 'Pipeline',
            uuid: '310bdc8c-799a-447a-83b2-8decd779d339',
            children: null
          },
          {
            id: 362,
            parentId: 357,
            text: 'Multibranch Pipeline',
            uuid: 'c6f761fc-f0bc-47df-87a0-35627675140f',
            children: null
          },
          {
            id: 363,
            parentId: 357,
            text: '自动部署到Nexus服务器',
            uuid: 'ae05ce00-5cfa-4676-a903-765169f90df2',
            children: null
          },
          {
            id: 364,
            parentId: 357,
            text: '自动部署到tomcat',
            uuid: 'bc68af0c-f0b9-48a1-bae4-19cc35bbc115',
            children: null
          },
          {
            id: 365,
            parentId: 357,
            text: 'Blue Ocean',
            uuid: '75bc34a4-ee46-4f65-b506-f41e26e79506',
            children: null
          },
          {
            id: 366,
            parentId: 357,
            text: '使用Groovy Library',
            uuid: 'dacacc5b-5bb9-4a08-8f39-eb44d1065188',
            children: null
          },
          {
            id: 1159,
            parentId: 357,
            text: '配置其他节点',
            uuid: '77443298-15d5-42a6-8d87-8157b8ae395f',
            children: null
          }
        ]
      },
      {
        id: 367,
        parentId: 1,
        text: 'Teamcity',
        uuid: '1a957bb1-272a-4f77-b285-9f3e062e37bc',
        children: null
      },
      {
        id: 368,
        parentId: 1,
        text: 'Sonar',
        uuid: '87c8428f-2b4e-46c6-b8dc-700e7f57c8db',
        children: [
          {
            id: 369,
            parentId: 368,
            text: 'Docker启动',
            uuid: 'd41d8528-c5f1-49dc-8fa9-940d677fff4c',
            children: null
          }
        ]
      },
      {
        id: 370,
        parentId: 1,
        text: 'SELinux',
        uuid: '851ea5fb-945a-4c24-963e-6596b92fca94',
        children: null
      },
      {
        id: 371,
        parentId: 1,
        text: 'Memcached',
        uuid: 'b539641c-caa6-4444-a079-73e0fef4b6db',
        children: null
      },
      {
        id: 372,
        parentId: 1,
        text: 'RabbitMQ',
        uuid: 'a22a5863-18bc-4766-a62a-b71ea427c639',
        children: null
      },
      {
        id: 373,
        parentId: 1,
        text: 'CGI',
        uuid: '4274f451-0dee-46cf-a30c-f246dd1ac384',
        children: null
      },
      {
        id: 374,
        parentId: 1,
        text: 'Java',
        uuid: 'a9d2f5a5-65f9-4685-9ec5-c5505a7bc1ab',
        children: [
          {
            id: 375,
            parentId: 374,
            text: 'Basic',
            uuid: '9ec333b1-3ba7-4239-8d6e-b2fadf03d203',
            children: null
          },
          {
            id: 1069,
            parentId: 374,
            text: '并发、线程原理',
            uuid: '1454c054-8939-4cfd-ae5c-4aa3d68bf806',
            children: [
              {
                id: 1070,
                parentId: 1069,
                text: '顺序一致性模型与重排序',
                uuid: 'a8bd4a37-3728-4733-a394-8f3fe5d8f7a2',
                children: null
              },
              {
                id: 1072,
                parentId: 1069,
                text: 'Java锁',
                uuid: '60886c9a-0e7c-48fd-b185-a4d66c350e8d',
                children: null
              },
              {
                id: 1073,
                parentId: 1069,
                text: '双重检查锁定与延迟初始化',
                uuid: 'dbefdef9-cefa-48a8-811d-5a71c993c52c',
                children: null
              }
            ]
          },
          {
            id: 399,
            parentId: 374,
            text: '线程及使用实例',
            uuid: '01efb3fd-d7c7-4b28-8dc3-d7891112f638',
            children: null
          },
          {
            id: 376,
            parentId: 374,
            text: 'transient/volatile',
            uuid: '3e7805c0-50ca-4c53-b1c3-8fed1664de31',
            children: null
          },
          {
            id: 377,
            parentId: 374,
            text: 'strictfp',
            uuid: '7d24ac37-a580-4ef1-8b1f-902e5c428209',
            children: null
          },
          {
            id: 378,
            parentId: 374,
            text: 'native',
            uuid: '7dc4c3be-1c90-4f47-9892-d943036f63d4',
            children: null
          },
          {
            id: 379,
            parentId: 374,
            text: 'Jvm参数',
            uuid: '531e3066-e155-4b31-857d-ac0b6e91134b',
            children: null
          },
          {
            id: 1096,
            parentId: 374,
            text: '数据结构时间复杂度',
            uuid: 'e92ff204-5ca4-4df1-aeb6-3c1f195b33e4',
            children: null
          },
          {
            id: 380,
            parentId: 374,
            text: 'ArrayList LinkedList',
            uuid: '4fbf949c-9713-4283-9c72-d6dcb83abb18',
            children: null
          },
          {
            id: 382,
            parentId: 374,
            text: 'HashMap/HashTable',
            uuid: 'd0d8e5ee-85f0-42ed-9962-c2a153c17346',
            children: null
          },
          {
            id: 383,
            parentId: 374,
            text: 'Hash',
            uuid: '6e6793ee-f975-4dce-9dc9-4be568a83c75',
            children: null
          },
          {
            id: 384,
            parentId: 374,
            text: '泛型',
            uuid: '0c0ad159-c337-4cd7-84a8-3ba7073c02e8',
            children: null
          },
          {
            id: 385,
            parentId: 374,
            text: '注入，反依赖',
            uuid: 'bcea1381-5d02-4092-86d1-a0edbfd756e6',
            children: null
          },
          {
            id: 1097,
            parentId: 374,
            text: 'Annotation 注解',
            uuid: 'bd1b8e94-5fa3-4d1f-a588-126f2f98f1e7',
            children: null
          },
          {
            id: 386,
            parentId: 374,
            text: 'pdfbox',
            uuid: 'e7cab192-b396-4d9c-ab99-1a00cde7a761',
            children: null
          },
          {
            id: 387,
            parentId: 374,
            text: 'iText PDF处理',
            uuid: 'f3358a26-6047-4720-a728-e65263dc8930',
            children: null
          },
          {
            id: 388,
            parentId: 374,
            text: 'Double与BigDecimal 精度问题',
            uuid: '8eaf737e-b8dc-428a-95e6-83edd02f0111',
            children: null
          },
          {
            id: 389,
            parentId: 374,
            text: 'keytool',
            uuid: '5fe2880d-c438-4b7e-a49a-fabac2c43f58',
            children: null
          },
          {
            id: 390,
            parentId: 374,
            text: 'Log',
            uuid: '5b355d49-be25-4b55-8390-4f3c2813b21b',
            children: [
              {
                id: 391,
                parentId: 390,
                text: 'log4j',
                uuid: '2586e595-7bdf-4fc4-a638-2223248775fd',
                children: null
              },
              {
                id: 392,
                parentId: 390,
                text: 'Logback',
                uuid: 'd4659ae8-b86e-4a24-bfc8-cd90da33730f',
                children: null
              }
            ]
          },
          {
            id: 393,
            parentId: 374,
            text: 'URLEncoder/URLDecoder',
            uuid: '0d6cc9f4-4b9b-4847-b18a-070dcab5b8a6',
            children: null
          },
          {
            id: 394,
            parentId: 374,
            text: '使用HttpUrlConnection',
            uuid: '8985941b-562f-4d45-9bb2-c14f706494ef',
            children: [
              {
                id: 395,
                parentId: 394,
                text: '发送POST/GET',
                uuid: 'f0739310-520c-4f9a-9dbd-97ce49b51b63',
                children: null
              }
            ]
          },
          {
            id: 396,
            parentId: 374,
            text: 'Runnable/Callbale/Future',
            uuid: 'ff1273ff-fb26-4169-82d0-0f7441925f90',
            children: null
          },
          {
            id: 397,
            parentId: 374,
            text: '日期转换',
            uuid: '065afe8c-778c-4aa7-bab5-b3b8261c845a',
            children: null
          },
          {
            id: 398,
            parentId: 374,
            text: '读取文本文件内容',
            uuid: 'b39dcbb0-610c-4df7-8fcb-2b4ff43f7c3c',
            children: null
          }
        ]
      },
      {
        id: 1077,
        parentId: 1,
        text: 'Kotlin',
        uuid: '81bda9f6-a208-49e0-8ebd-6bbb9d3dcae2',
        children: [
          {
            id: 1078,
            parentId: 1077,
            text: 'Basic',
            uuid: 'b49bd0b3-cb76-445b-b34b-f543e613656c',
            children: [
              {
                id: 1082,
                parentId: 1078,
                text: 'run also let takeIf',
                uuid: 'eed54587-48b2-4cd8-a4f6-620405da6e7a',
                children: null
              },
              {
                id: 1113,
                parentId: 1078,
                text: '尾递归',
                uuid: '411629eb-b9b6-4410-8c01-ef6459134dee',
                children: null
              }
            ]
          },
          {
            id: 1079,
            parentId: 1077,
            text: '类、接口、扩展及内部、嵌套、数据、密封、枚举类',
            uuid: '61b853ae-e66c-428d-a32b-43ee9c2959a1',
            children: null
          },
          {
            id: 1085,
            parentId: 1077,
            text: '对象',
            uuid: '84fda1b7-0b5f-4a88-bf46-769a7beba200',
            children: null
          },
          {
            id: 1108,
            parentId: 1077,
            text: '@JvmField @JvmStatic',
            uuid: '46d54c63-b2f2-4f02-a077-4bab36fa18b3',
            children: null
          },
          {
            id: 1087,
            parentId: 1077,
            text: '委托、委托属性',
            uuid: '3069af1e-1611-4d5f-9ab2-daf37cf405e9',
            children: null
          },
          {
            id: 1086,
            parentId: 1077,
            text: '泛型',
            uuid: 'dd79ff6e-1df0-4c7f-ae3a-24eebbb594be',
            children: null
          },
          {
            id: 1081,
            parentId: 1077,
            text: '函数、lambda表达式、inline、infix',
            uuid: '334a6cef-cebd-485a-9aa0-94622b2bcd47',
            children: null
          },
          {
            id: 1095,
            parentId: 1077,
            text: '代数数据类型 ADT、when模式匹配',
            uuid: 'c6d0fe2d-75e1-4466-bb8b-0955d74b343f',
            children: null
          },
          {
            id: 1083,
            parentId: 1077,
            text: '数组集合',
            uuid: 'f8e61959-0850-4f42-bcad-9b8f677527d7',
            children: [
              {
                id: 1084,
                parentId: 1083,
                text: 'count map flatten flatMap forEach sumBy groupBy folder reduce joinToString filter takeWhile',
                uuid: '9cc41ffc-f5e5-4963-a633-3b1d35942fdd',
                children: null
              }
            ]
          },
          {
            id: 1109,
            parentId: 1077,
            text: '设计模式',
            uuid: '3bdb6ec5-c917-4280-953c-6e7cdfa39a0e',
            children: null
          },
          {
            id: 1110,
            parentId: 1077,
            text: '异步和并发、协程',
            uuid: '47b0eef8-9f37-4991-8ab5-c5fdcb8976fa',
            children: [
              {
                id: 1111,
                parentId: 1110,
                text: 'Actor模型',
                uuid: '8524760c-e71e-48aa-86e5-fd79ca9566ed',
                children: null
              },
              {
                id: 1112,
                parentId: 1110,
                text: 'CQRS架构',
                uuid: '925c4fc7-87ae-44a6-a6f6-7f137e65a1e5',
                children: null
              }
            ]
          }
        ]
      },
      {
        id: 400,
        parentId: 1,
        text: 'Scala',
        uuid: 'bb5ce573-47c7-488a-a6fd-737ca33cec78',
        children: [
          {
            id: 401,
            parentId: 400,
            text: 'Basic',
            uuid: 'bd74c1ea-9595-429a-9698-740c9b54a639',
            children: [
              {
                id: 402,
                parentId: 401,
                text: 'Switch-Case/Pattern matching',
                uuid: 'bed16be9-c80a-4214-9e76-9ac662b2fc0a',
                children: null
              },
              {
                id: 403,
                parentId: 401,
                text: 'While Foreach循环',
                uuid: '8c9976ca-564d-4312-bb01-340530bed41c',
                children: null
              },
              {
                id: 404,
                parentId: 401,
                text: 'Apply/unapply',
                uuid: 'e327c953-fc0f-41b5-a025-f0bc14313b5a',
                children: null
              },
              {
                id: 405,
                parentId: 401,
                text: '集合',
                uuid: '9aaf4362-38c1-4676-9fe6-3d998dfe4ea1',
                children: [
                  {
                    id: 406,
                    parentId: 405,
                    text: 'Array',
                    uuid: '5c8cc606-0081-4127-a848-5e88f0644056',
                    children: null
                  },
                  {
                    id: 407,
                    parentId: 405,
                    text: 'Seq',
                    uuid: 'a6dac419-d919-4786-b0ae-4c976393e9e6',
                    children: null
                  },
                  {
                    id: 408,
                    parentId: 405,
                    text: 'List',
                    uuid: '57ee9abc-be2f-4d5d-aec0-f78e5896951b',
                    children: null
                  },
                  {
                    id: 409,
                    parentId: 405,
                    text: 'Tuple',
                    uuid: '8047a1e4-40f7-46a0-ace4-3f70d92f83a2',
                    children: null
                  },
                  {
                    id: 410,
                    parentId: 405,
                    text: 'Set',
                    uuid: '4cac867c-2098-47fc-856d-8f92ac544eec',
                    children: null
                  }
                ]
              },
              {
                id: 411,
                parentId: 401,
                text: 'Map',
                uuid: 'a002950d-1c0e-4c9f-8703-a869e478ed5e',
                children: null
              },
              {
                id: 412,
                parentId: 401,
                text: 'block',
                uuid: 'f8df0edb-6267-42c5-80a7-c7faf3361c9d',
                children: null
              },
              {
                id: 413,
                parentId: 401,
                text: '函数',
                uuid: '7adb0bad-dc9d-4b7c-9f9b-b34b09d99351',
                children: [
                  {
                    id: 414,
                    parentId: 413,
                    text: 'map',
                    uuid: '0eea49de-f640-408a-b615-4e9675f6435c',
                    children: null
                  },
                  {
                    id: 415,
                    parentId: 413,
                    text: 'flatMap',
                    uuid: '3c573b23-02ab-4379-b442-7254ea96bf57',
                    children: null
                  },
                  {
                    id: 416,
                    parentId: 413,
                    text: 'reduce/reduceLeft/reduce/Right',
                    uuid: '6a525b6f-5446-47fe-a691-2667fc2dba7c',
                    children: null
                  }
                ]
              },
              {
                id: 417,
                parentId: 401,
                text: '方法',
                uuid: '41f7660d-fc3d-42cc-a7c1-bad42152a4bd',
                children: null
              },
              {
                id: 418,
                parentId: 401,
                text: '???',
                uuid: 'de67b260-9271-4f8d-afb8-a14bdfdbd7ad',
                children: null
              },
              {
                id: 419,
                parentId: 401,
                text: '省略写法/语法糖',
                uuid: 'ec256a53-44fa-471f-896f-3e7719537cc1',
                children: [
                  {
                    id: 420,
                    parentId: 419,
                    text: '语法糖',
                    uuid: 'f29a1c96-5167-4fcd-b695-d47e2d600115',
                    children: null
                  }
                ]
              },
              {
                id: 421,
                parentId: 401,
                text: '类',
                uuid: 'eee83a5a-39ef-4047-b488-1d2a04d895b9',
                children: null
              },
              {
                id: 422,
                parentId: 401,
                text: '泛型',
                uuid: '303e92a2-08ec-4691-b316-20b2c7c58f87',
                children: [
                  {
                    id: 423,
                    parentId: 422,
                    text: 'Scala的协变',
                    uuid: 'bc76fa49-4f9b-4aec-8688-2caea4dd4bb7',
                    children: null
                  },
                  {
                    id: 424,
                    parentId: 422,
                    text: 'Scala的逆变',
                    uuid: '60d40068-b3bd-494c-b440-5eaa2398b509',
                    children: null
                  },
                  {
                    id: 425,
                    parentId: 422,
                    text: '下界lower bounds',
                    uuid: '4910ba43-35e7-427f-8a88-58af8eed799b',
                    children: null
                  },
                  {
                    id: 426,
                    parentId: 422,
                    text: '上界upper bounds',
                    uuid: '17d84652-a30c-43ae-8ef1-b47351a6f189',
                    children: null
                  },
                  {
                    id: 427,
                    parentId: 422,
                    text: 'View Bound <%',
                    uuid: 'c6464a3a-6742-4202-a5f7-e780e31e8cf9',
                    children: null
                  },
                  {
                    id: 428,
                    parentId: 422,
                    text: 'Context Bound',
                    uuid: '810da961-2d32-4f43-8a11-7f1f94e91d35',
                    children: null
                  }
                ]
              },
              {
                id: 429,
                parentId: 401,
                text: 'type',
                uuid: 'e30f94be-bfd0-4ddf-9e72-1e7f86191161',
                children: null
              },
              {
                id: 430,
                parentId: 401,
                text: 'Case class',
                uuid: 'e8e8c1cc-dcd3-4239-8015-3f121433693a',
                children: null
              },
              {
                id: 431,
                parentId: 401,
                text: 'Objects',
                uuid: '6a5564a7-c393-46a8-8332-5d9775d3bbbc',
                children: null
              },
              {
                id: 432,
                parentId: 401,
                text: 'Traits',
                uuid: 'fbeb5599-7963-40b1-818d-bf3ef0ad7dbb',
                children: null
              },
              {
                id: 433,
                parentId: 401,
                text: 'self',
                uuid: 'f60718b2-a111-4b85-9d0b-28b27183c669',
                children: null
              },
              {
                id: 434,
                parentId: 401,
                text: 'sealed/final',
                uuid: 'ec4cbbf9-9d5c-45ba-ae4e-685563f9f5a4',
                children: null
              },
              {
                id: 435,
                parentId: 401,
                text: '正则表达式',
                uuid: '368d116a-fc3c-4ba2-bf9c-680902bad7e0',
                children: null
              },
              {
                id: 436,
                parentId: 401,
                text: 'call-by-value和call-by-name',
                uuid: 'e1352994-dd61-449f-b07e-74d90939e97e',
                children: null
              },
              {
                id: 437,
                parentId: 401,
                text: 'yield',
                uuid: 'f90236ec-766a-4bb4-8b7b-444d26b01762',
                children: null
              },
              {
                id: 438,
                parentId: 401,
                text: '推导式',
                uuid: '297c8d0f-59d0-4959-93ad-3800bf635313',
                children: null
              },
              {
                id: 439,
                parentId: 401,
                text: '尾递归',
                uuid: 'c16141ef-47f6-4ef5-b267-69857ebef195',
                children: null
              },
              {
                id: 440,
                parentId: 401,
                text: 'try catch/Try Success Failure',
                uuid: 'b3ce94aa-8ef1-4629-b372-5b50ea44c234',
                children: null
              },
              {
                id: 441,
                parentId: 401,
                text: '偏函数',
                uuid: '75b365f7-17c6-425b-a805-b1c36e0cc022',
                children: null
              },
              {
                id: 442,
                parentId: 401,
                text: 'Option',
                uuid: '3b22ae48-0715-4bb2-b6f7-423270900c05',
                children: null
              }
            ]
          },
          {
            id: 443,
            parentId: 400,
            text: '程序',
            uuid: 'b77b5ab5-f20a-4e4b-99b1-2c0029201712',
            children: null
          },
          {
            id: 444,
            parentId: 400,
            text: '下划线_',
            uuid: '392c9b96-fae4-458f-a8eb-6ee364014099',
            children: null
          },
          {
            id: 445,
            parentId: 400,
            text: 'implicit关键字',
            uuid: '7c82ca0c-cfd5-461f-8124-301e1e98de3c',
            children: null
          },
          {
            id: 446,
            parentId: 400,
            text: '读写文件',
            uuid: 'efd6e151-3bcb-4aed-8293-e9b8026731d4',
            children: null
          },
          {
            id: 447,
            parentId: 400,
            text: '测试',
            uuid: '34852f05-fe59-4e29-ad40-8f96d931793b',
            children: null
          }
        ]
      },
      {
        id: 448,
        parentId: 1,
        text: 'Cucumber',
        uuid: '2575c403-0ffc-49cd-bd3d-2392eba849ab',
        children: [
          {
            id: 449,
            parentId: 448,
            text: 'scala下使用',
            uuid: 'fa7043de-3cd2-4ffe-b706-4d3f78f3444a',
            children: null
          }
        ]
      },
      {
        id: 450,
        parentId: 1,
        text: 'SBT',
        uuid: 'c6e9940c-5062-4dcd-8853-c981097127cf',
        children: [
          {
            id: 451,
            parentId: 450,
            text: 'Basic',
            uuid: '72566566-c956-4350-b6d5-9309757baca6',
            children: null
          },
          {
            id: 452,
            parentId: 450,
            text: '配置',
            uuid: 'cdc9789c-567d-42f9-83b1-3b8e18e1fedb',
            children: null
          },
          {
            id: 453,
            parentId: 450,
            text: 'Build.sbt脚本',
            uuid: '560420b6-eeb2-4857-a3cc-0c5f5e841a61',
            children: null
          },
          {
            id: 454,
            parentId: 450,
            text: '测试',
            uuid: 'a28eb44d-0ff7-4015-85ec-d3705287184c',
            children: null
          },
          {
            id: 455,
            parentId: 450,
            text: '交互模式',
            uuid: 'db4aca0e-ffe9-4b26-84a4-de94d5507efd',
            children: null
          },
          {
            id: 456,
            parentId: 450,
            text: '多项目',
            uuid: '5f6778fe-a9a9-4f92-9349-b73f8724bf15',
            children: null
          },
          {
            id: 457,
            parentId: 450,
            text: 'Version 0.13',
            uuid: '152ff7c6-5979-4f5c-9e13-f0919cfdb950',
            children: [
              {
                id: 458,
                parentId: 457,
                text: 'Build.sbt/settings',
                uuid: '5c998122-ed91-47c4-903c-89b9b2865a62',
                children: null
              },
              {
                id: 459,
                parentId: 457,
                text: 'Key scope',
                uuid: 'c2dc5669-aa7f-49a7-acec-a6ed26f48ed5',
                children: null
              },
              {
                id: 460,
                parentId: 457,
                text: 'Task',
                uuid: 'f643e401-a197-4c4d-8fb4-df402d716306',
                children: null
              },
              {
                id: 461,
                parentId: 457,
                text: 'Scope',
                uuid: '72b2b430-1d0c-41e4-9f7b-199630b7b980',
                children: null
              },
              {
                id: 462,
                parentId: 457,
                text: 'Parse',
                uuid: '94aeccdb-e631-41bf-b865-ea9d31616a8c',
                children: null
              },
              {
                id: 463,
                parentId: 457,
                text: '依赖',
                uuid: '1bd499cc-cde9-4baa-80be-632cd2c12ace',
                children: null
              },
              {
                id: 464,
                parentId: 457,
                text: '文件/Process',
                uuid: '8a6e2d91-575e-4b5f-a017-3efe0d8eefce',
                children: null
              },
              {
                id: 465,
                parentId: 457,
                text: '自定义plugin',
                uuid: 'e87a2123-eca9-4fc5-ba74-c7e373262c91',
                children: null
              },
              {
                id: 466,
                parentId: 457,
                text: '使用com.typesafe.config.ConfigFactory',
                uuid: '39229db5-88fc-4f02-8485-a0e61c3bcb1b',
                children: null
              }
            ]
          },
          {
            id: 467,
            parentId: 450,
            text: '使用sbt-assembly插件',
            uuid: 'c4e3aa60-79ad-4414-a0a9-637b829d68c1',
            children: null
          },
          {
            id: 468,
            parentId: 450,
            text: '使用sbt-docker插件',
            uuid: '3bfbf4a6-42ad-4773-b1ff-24a584ab71af',
            children: [
              {
                id: 469,
                parentId: 468,
                text: 'Scala dockerfile',
                uuid: '85b5cc1e-a117-41f7-bb97-1106f1db5598',
                children: null
              }
            ]
          },
          {
            id: 470,
            parentId: 450,
            text: '使用sbt-docker-compose',
            uuid: '3dddffaa-9d41-4740-9385-21b3f483de18',
            children: null
          }
        ]
      },
      {
        id: 471,
        parentId: 1,
        text: 'AKKA-Actor',
        uuid: 'caef783d-b3f4-4758-8f0a-b315199308ef',
        children: [
          {
            id: 472,
            parentId: 471,
            text: 'Scala',
            uuid: 'aac2b1c1-85fd-4951-9d02-31ae78b028d8',
            children: null
          }
        ]
      },
      {
        id: 473,
        parentId: 1,
        text: 'AKKA-HTTP',
        uuid: '215c3095-c394-45b6-901a-0ed3c00cebf4',
        children: [
          {
            id: 474,
            parentId: 473,
            text: 'bindAndHandle',
            uuid: '26799802-9b4b-4ccd-a518-323281620f94',
            children: null
          },
          {
            id: 475,
            parentId: 473,
            text: 'Route',
            uuid: 'c428ff51-536f-413c-bf07-528244c861b3',
            children: null
          },
          {
            id: 476,
            parentId: 473,
            text: 'directive',
            uuid: '843778f5-bccb-409c-af90-53adcfc0fa95',
            children: [
              {
                id: 477,
                parentId: 476,
                text: '自定义Directive',
                uuid: '8db24c79-773d-42e2-a555-6f9c1ca34ad0',
                children: null
              },
              {
                id: 478,
                parentId: 476,
                text: 'path',
                uuid: 'aa9578be-0ce7-43db-a7c9-987d12abfbb4',
                children: null
              },
              {
                id: 479,
                parentId: 476,
                text: 'pathEnd',
                uuid: 'a854fcad-1c08-4694-a374-fa77a7de7c7a',
                children: null
              },
              {
                id: 480,
                parentId: 476,
                text: 'extractMethod',
                uuid: 'de6690e1-d3ee-4167-abfd-a9e4e55d8d3c',
                children: null
              },
              {
                id: 481,
                parentId: 476,
                text: 'parameter',
                uuid: '2467eedc-a7ec-4377-8990-b53763fa4e33',
                children: null
              },
              {
                id: 482,
                parentId: 476,
                text: 'onSuccess',
                uuid: '9bfd627a-a6b2-4e81-8cc1-0f707267bab7',
                children: null
              }
            ]
          },
          {
            id: 483,
            parentId: 473,
            text: 'Actor使用Try/Success/Failure',
            uuid: '186a7069-8213-4014-a6e1-67b9588e2158',
            children: null
          },
          {
            id: 484,
            parentId: 473,
            text: 'json request/response',
            uuid: '33734ed9-cf9c-41af-b649-bec6de4615d3',
            children: null
          },
          {
            id: 485,
            parentId: 473,
            text: '使用Future',
            uuid: '0bb7e913-c88d-46e4-ace8-df15af38cdde',
            children: null
          },
          {
            id: 486,
            parentId: 473,
            text: '更底层的http request/response',
            uuid: 'f6482e1a-2af0-4c64-9e98-57912f8b7628',
            children: null
          }
        ]
      },
      {
        id: 487,
        parentId: 1,
        text: 'Ansible',
        uuid: '3b403b04-e8ad-49d3-a3b8-bd5d17f4890a',
        children: [
          {
            id: 488,
            parentId: 487,
            text: 'Playbook(剧本)',
            uuid: 'f31980c9-5ed9-4563-b72e-d90ba49f0502',
            children: null
          },
          {
            id: 489,
            parentId: 487,
            text: 'task',
            uuid: '767bd0b8-f40a-469c-8270-8133f38a2c8d',
            children: null
          },
          {
            id: 490,
            parentId: 487,
            text: 'ansible role',
            uuid: 'dc625f4a-5e9f-4b36-beb8-47ccfbe5ae5a',
            children: null
          },
          {
            id: 491,
            parentId: 487,
            text: 'Vault',
            uuid: 'f32cc552-97d6-45ef-9c6c-3cdf8a6986a4',
            children: null
          }
        ]
      },
      {
        id: 492,
        parentId: 1,
        text: 'Spring framework',
        uuid: 'a742f458-7f93-46ea-8da5-a82933ae91dc',
        children: [
          {
            id: 493,
            parentId: 492,
            text: 'Basic',
            uuid: '2f8bf0a5-fcdd-4195-939d-f3be009e3572',
            children: [
              {
                id: 494,
                parentId: 493,
                text: 'Bean初始化销毁',
                uuid: '1681c7b4-c11d-469a-abb0-ed1006a97a73',
                children: null
              },
              {
                id: 495,
                parentId: 493,
                text: 'Profile',
                uuid: 'a9fbd3ad-f0c4-4f57-856e-99ab4dc50352',
                children: null
              },
              {
                id: 496,
                parentId: 493,
                text: '事件',
                uuid: '0a298c85-6dab-4a51-a763-50671a6fca3a',
                children: null
              },
              {
                id: 497,
                parentId: 493,
                text: 'Spring aware',
                uuid: '446b81be-00ee-436f-87bc-d7a02ea07b31',
                children: null
              },
              {
                id: 498,
                parentId: 493,
                text: '多线程',
                uuid: '3b541cea-95d9-48fb-98db-50b1c9cd0291',
                children: null
              },
              {
                id: 499,
                parentId: 493,
                text: '计划任务',
                uuid: '51c2464a-c7f9-47ae-988a-520bf968f076',
                children: null
              },
              {
                id: 500,
                parentId: 493,
                text: '条件注解@Conditional',
                uuid: '69face93-74bb-4e72-bc63-b01c5156a7e9',
                children: null
              },
              {
                id: 501,
                parentId: 493,
                text: '注解（组合注解）',
                uuid: '961628e6-c0b7-4f03-ba1b-63b4c3e8c024',
                children: null
              },
              {
                id: 502,
                parentId: 493,
                text: '基本Junit测试',
                uuid: '26420e73-034a-45de-bd1d-a62b994d5385',
                children: null
              }
            ]
          },
          {
            id: 503,
            parentId: 492,
            text: 'Annotation (spring /spring boot)',
            uuid: 'ad4856ac-eca0-466c-82a1-b27c0caf9d68',
            children: [
              {
                id: 504,
                parentId: 503,
                text: '@Bean',
                uuid: '8d3f1f47-8478-4def-a40d-ea558b671947',
                children: null
              },
              {
                id: 505,
                parentId: 503,
                text: '@Qualifier',
                uuid: '539936f3-2ec0-4f2d-9cd4-fa41e5cc5517',
                children: null
              },
              {
                id: 506,
                parentId: 503,
                text: '@Resource',
                uuid: '5d1c4417-856a-4459-a24e-1424ab7c5fa3',
                children: null
              },
              {
                id: 507,
                parentId: 503,
                text: '@Component',
                uuid: 'a3a89c9f-c38e-430c-a973-d659a19bd8fb',
                children: null
              },
              {
                id: 508,
                parentId: 503,
                text: '@ComponentScan',
                uuid: '9af83197-f8e6-4424-aa9d-88f7898fcb91',
                children: null
              },
              {
                id: 509,
                parentId: 503,
                text: '@Service',
                uuid: 'f1ab7ad2-56ad-45e6-8808-f6ce0344a871',
                children: null
              },
              {
                id: 510,
                parentId: 503,
                text: '@Controller/@RestController',
                uuid: '36f99549-8b9d-4aea-96cc-9f944f6ea629',
                children: null
              },
              {
                id: 511,
                parentId: 503,
                text: '@Autowired',
                uuid: 'e3577c9e-573f-4022-9ccb-f1d77d109b7a',
                children: null
              },
              {
                id: 512,
                parentId: 503,
                text: '@Profile',
                uuid: '2e06b727-e4f1-4108-b901-0da04a671397',
                children: null
              },
              {
                id: 513,
                parentId: 503,
                text: '@Conditional',
                uuid: '05ee54b4-9182-4fb0-8a7d-92c9a9a79fe1',
                children: null
              },
              {
                id: 514,
                parentId: 503,
                text: '@Scope',
                uuid: '016aa4b0-8b6c-4fd3-b95c-ea485216b917',
                children: null
              },
              {
                id: 515,
                parentId: 503,
                text: '@Value',
                uuid: 'd424a7be-2a8a-49e7-939f-1c10ccc0cfb2',
                children: null
              },
              {
                id: 516,
                parentId: 503,
                text: '@DependsOn',
                uuid: '31eece50-6493-4bed-8c37-2b6cc0f2aeaa',
                children: null
              },
              {
                id: 517,
                parentId: 503,
                text: '@Import',
                uuid: '88a0cefd-bd88-4be9-a6a8-f55bb63eb188',
                children: null
              },
              {
                id: 518,
                parentId: 503,
                text: '@Primary',
                uuid: 'cf3a3ca1-201a-4c13-96e2-21fd9aa8ad0c',
                children: null
              },
              {
                id: 519,
                parentId: 503,
                text: '@SpringBootApplication',
                uuid: 'e8672966-3efb-4cb6-9d6f-2224ff071737',
                children: null
              },
              {
                id: 520,
                parentId: 503,
                text: '@RequestMapping',
                uuid: 'f99be4f0-2fe0-434a-8b62-c2079f2bbf4d',
                children: null
              },
              {
                id: 521,
                parentId: 503,
                text: '@ResponseBody',
                uuid: '761287bb-b9d2-4a3c-8575-6397ea7b2bf6',
                children: null
              },
              {
                id: 522,
                parentId: 503,
                text: '@RequestBody',
                uuid: '4730dbe2-adcb-44ee-972d-68634cc2097c',
                children: null
              },
              {
                id: 523,
                parentId: 503,
                text: '@PathVariable',
                uuid: '5025a092-dc26-44ce-b53d-cd10dd2c4ead',
                children: null
              },
              {
                id: 524,
                parentId: 503,
                text: '@ServletComponentScan',
                uuid: '2b49e3b2-bc87-4379-ae8f-16f961c930b8',
                children: null
              },
              {
                id: 525,
                parentId: 503,
                text: '@ConfigurationProperties',
                uuid: '2cc20fc7-e971-48de-afed-2a5fe8f007e3',
                children: null
              },
              {
                id: 526,
                parentId: 503,
                text: '@LoadBalanced',
                uuid: '488b6417-5306-4aad-bdb4-f8b26c8398be',
                children: null
              },
              {
                id: 527,
                parentId: 503,
                text: '@RefreshScope',
                uuid: 'b7b56fb1-8eba-4eab-a348-5d92305d44ba',
                children: null
              }
            ]
          },
          {
            id: 528,
            parentId: 492,
            text: 'Web annotation',
            uuid: 'f1c84e1e-9827-483c-ae46-e1ac2fa01efa',
            children: [
              {
                id: 529,
                parentId: 528,
                text: '@WebServlet',
                uuid: '01d84d63-d9fd-4482-a191-0a8eab911abd',
                children: null
              }
            ]
          },
          {
            id: 530,
            parentId: 492,
            text: 'Spring MVC',
            uuid: '5f629a96-03c3-4983-81ca-73f37482689a',
            children: null
          },
          {
            id: 531,
            parentId: 492,
            text: 'Spring EL (Expression Language)',
            uuid: 'a228ab8d-5fcc-4fa3-8714-7c18478f9339',
            children: null
          }
        ]
      },
      {
        id: 532,
        parentId: 1,
        text: 'Springboot',
        uuid: '7452493a-9ef3-4a81-85f3-a4648e66a1de',
        children: [
          {
            id: 533,
            parentId: 532,
            text: '自动配置实例',
            uuid: 'fd316e94-329b-421d-87dd-91f4b99e814f',
            children: null
          },
          {
            id: 1076,
            parentId: 532,
            text: '独立运行，打包',
            uuid: '977cbbec-14c2-4e05-92d3-acc746cefdd9',
            children: null
          },
          {
            id: 534,
            parentId: 532,
            text: 'Tomcat部署注意点',
            uuid: '5f5532a7-efe3-41d1-8a9d-605a6305a9e2',
            children: null
          },
          {
            id: 535,
            parentId: 532,
            text: 'Tomcat8设置datasource',
            uuid: 'c7983c6d-3a56-40bd-8fb2-27bbb0d184a0',
            children: null
          },
          {
            id: 536,
            parentId: 532,
            text: 'Springboot profile和maven profile',
            uuid: '7299a9e3-075d-445c-a30d-b8b8dfcfe5ff',
            children: null
          },
          {
            id: 537,
            parentId: 532,
            text: 'Pom.xml',
            uuid: '73531e2c-dbd2-4247-a5a6-ec311210c5e1',
            children: null
          },
          {
            id: 538,
            parentId: 532,
            text: 'Basic',
            uuid: '7e7f25de-ace4-4f2c-8758-a5096e3ef302',
            children: null
          },
          {
            id: 539,
            parentId: 532,
            text: 'Context',
            uuid: '4466a041-67b1-4045-9a6c-2c1f32094820',
            children: null
          },
          {
            id: 540,
            parentId: 532,
            text: 'Controller',
            uuid: '4efa2e8b-129a-4cdb-abbf-73983f682abd',
            children: null
          },
          {
            id: 541,
            parentId: 532,
            text: '文件上传',
            uuid: 'b3732f96-17ab-417e-aa94-9a6363106291',
            children: null
          },
          {
            id: 542,
            parentId: 532,
            text: 'Json表示',
            uuid: 'abe1ece2-d3e4-4fd1-8f89-9c89e6cfebec',
            children: null
          },
          {
            id: 543,
            parentId: 532,
            text: '使用Jpa和EclipseLink做数据库访问',
            uuid: '74bf3a6a-ec18-4355-a92a-4c9cdd326c4f',
            children: null
          },
          {
            id: 544,
            parentId: 532,
            text: 'Spring boot里使用Servlet方法',
            uuid: 'fa739c34-dba2-4890-8c9d-78f3cd6029d8',
            children: null
          },
          {
            id: 545,
            parentId: 532,
            text: 'JPA相关启动，spring-boot:run 或 直接run as application',
            uuid: '99384e88-a4b9-42f5-abec-211d40f7dd0a',
            children: [
              {
                id: 546,
                parentId: 545,
                text: 'Spring-boot:run启动',
                uuid: 'e23d1abb-bcd9-4a15-9590-1a226f71492f',
                children: null
              },
              {
                id: 547,
                parentId: 545,
                text: 'Run as application启动',
                uuid: '9c4b51fb-6e85-4049-a15c-e555900b5973',
                children: null
              },
              {
                id: 1170,
                parentId: 545,
                text: '引入第三方jar包启动springboot',
                uuid: 'e3d7307e-391f-4054-a5ae-2cc69c3b20b4',
                children: null
              }
            ]
          },
          {
            id: 548,
            parentId: 532,
            text: '跨域请求问题',
            uuid: '92da9b42-6ad8-40fe-9ec2-caad505591d4',
            children: null
          },
          {
            id: 549,
            parentId: 532,
            text: '使用jdbc',
            uuid: '8eeac3fc-6ea5-4e4e-b13e-088737503584',
            children: null
          },
          {
            id: 550,
            parentId: 532,
            text: '使用Olingo API的Spring boot例子',
            uuid: '83ab8f11-9290-4bec-adc3-20a94e87034c',
            children: null
          },
          {
            id: 551,
            parentId: 532,
            text: 'HCP上获得用户信息',
            uuid: 'a1bb5c9a-4a0e-44fe-93c4-6196cb29870e',
            children: null
          },
          {
            id: 552,
            parentId: 532,
            text: 'DefaultInstanceManager ClassCast错误',
            uuid: '22039cf5-bdd7-46de-862c-53128cc2befb',
            children: null
          },
          {
            id: 553,
            parentId: 532,
            text: 'AOP',
            uuid: 'c543d00d-9e35-4577-bd08-d87c08156a20',
            children: null
          },
          {
            id: 554,
            parentId: 532,
            text: '测试',
            uuid: '1d3e69fd-ae71-45ea-b305-7a5a8e68ca46',
            children: null
          },
          {
            id: 555,
            parentId: 532,
            text: 'Intelij下依赖provide问题',
            uuid: 'ce0ad2a1-b1a1-46a9-95a2-73475dfb706b',
            children: null
          }
        ]
      },
      {
        id: 556,
        parentId: 1,
        text: 'Spring boot RestTemplate',
        uuid: 'bd37f7c1-4111-49cd-a987-8d901c486023',
        children: [
          {
            id: 557,
            parentId: 556,
            text: 'GET访问',
            uuid: '9545abe7-2599-47d5-957c-9b5d560932f0',
            children: null
          },
          {
            id: 558,
            parentId: 556,
            text: 'POST访问',
            uuid: 'ac38fffd-23f5-4ae9-9844-d392f784f13b',
            children: null
          },
          {
            id: 559,
            parentId: 556,
            text: 'Put访问',
            uuid: 'e451e867-f789-4be3-9dce-64b9dc1295d6',
            children: null
          },
          {
            id: 560,
            parentId: 556,
            text: 'Delete访问',
            uuid: '7711d684-e44c-4cb0-8b7e-f0b5fb1f97ab',
            children: null
          },
          {
            id: 561,
            parentId: 556,
            text: 'RestTemplate ClientHttpRequestFactory',
            uuid: 'd2f19840-c45d-4087-97e7-a0852b454407',
            children: null
          },
          {
            id: 562,
            parentId: 556,
            text: '使用ResultTemplate读取本地JKS keystore访问http连接',
            uuid: '1665ddb8-593e-4bc7-8d1f-6f445f27eeec',
            children: null
          },
          {
            id: 1194,
            parentId: 556,
            text: 'RestTemplateConfig Sample',
            uuid: '7cdb38c0-2815-45ac-8453-d1f7823bfd40',
            children: null
          }
        ]
      },
      {
        id: 563,
        parentId: 1,
        text: 'Spring boot websocket',
        uuid: 'b20017a0-6787-4acf-afd2-217fb234dd7b',
        children: [
          {
            id: 564,
            parentId: 563,
            text: '@OnOpen',
            uuid: 'f6f99499-94cb-4075-b381-6c1b2f6297cd',
            children: null
          },
          {
            id: 565,
            parentId: 563,
            text: '@OnMessage',
            uuid: 'a1631336-ea1f-4fae-bc24-7c84a8bd6cc4',
            children: null
          }
        ]
      },
      {
        id: 566,
        parentId: 1,
        text: 'Spring cloud actuator',
        uuid: '6248f25a-e0be-499e-ae38-b869c4d73273',
        children: null
      },
      {
        id: 567,
        parentId: 1,
        text: 'Spring security',
        uuid: '76ad5890-3dba-4069-b6bb-d80a499b459c',
        children: [
          {
            id: 568,
            parentId: 567,
            text: '使用数据库验证用户',
            uuid: '36eb2f49-3b1d-4846-ac9b-ac8651fa0703',
            children: null
          }
        ]
      },
      {
        id: 569,
        parentId: 1,
        text: 'Spring cloud eureka',
        uuid: '793a0142-2ad5-47bd-92be-8cb441e4e88a',
        children: null
      },
      {
        id: 570,
        parentId: 1,
        text: 'Spring cloud ribbon',
        uuid: '04043163-9805-446f-946a-5fc890b4e501',
        children: null
      },
      {
        id: 571,
        parentId: 1,
        text: 'Spring cloud feign',
        uuid: '06eae4c8-e474-48ef-a39b-bddbb82393fa',
        children: null
      },
      {
        id: 572,
        parentId: 1,
        text: 'Spring cloud zuul',
        uuid: '63e3fe42-4785-47ff-afd9-e8852276eb27',
        children: [
          {
            id: 573,
            parentId: 572,
            text: 'Filter',
            uuid: '4d8ed84e-850a-49b4-ad42-442a18352a0c',
            children: null
          },
          {
            id: 574,
            parentId: 572,
            text: '动态配置',
            uuid: '33ee1416-fa4d-49f9-8b22-4761862c6bbc',
            children: null
          }
        ]
      },
      {
        id: 575,
        parentId: 1,
        text: 'Spring cloud config',
        uuid: '68b07d13-b5ea-43d1-ab33-d4b25e61b790',
        children: [
          {
            id: 576,
            parentId: 575,
            text: '客户端使用',
            uuid: 'b998576e-3678-4a56-aa6f-aa3168d6f7d1',
            children: null
          }
        ]
      },
      {
        id: 577,
        parentId: 1,
        text: 'Spring boot bus',
        uuid: '0e9b8df7-7f23-4156-9e0e-58874e5ec1a2',
        children: null
      },
      {
        id: 578,
        parentId: 1,
        text: 'Maven依赖库',
        uuid: 'a11eafa7-e9f7-4ec4-96a2-ae4bf16287f1',
        children: [
          {
            id: 579,
            parentId: 578,
            text: 'Spring framework相关',
            uuid: '566c47cd-188f-4f98-b49e-f502a9b4f382',
            children: null
          },
          {
            id: 580,
            parentId: 578,
            text: 'Thymeleaf',
            uuid: '89e6919a-2d7a-4632-9aac-cec4b7fcb804',
            children: null
          },
          {
            id: 581,
            parentId: 578,
            text: 'Fasterxml',
            uuid: '05a96bc6-4bac-4df7-99ef-78639aa25940',
            children: null
          },
          {
            id: 582,
            parentId: 578,
            text: 'Lombok',
            uuid: 'e7056a99-8e8f-49f7-8c67-946a524af88c',
            children: null
          },
          {
            id: 583,
            parentId: 578,
            text: 'H2database',
            uuid: '919f482b-22e0-485a-86cc-979373eba654',
            children: null
          },
          {
            id: 584,
            parentId: 578,
            text: 'Eclipse link',
            uuid: 'b95e5e4e-dba7-483f-9118-5476d3b3c3c4',
            children: null
          },
          {
            id: 585,
            parentId: 578,
            text: 'Jpa',
            uuid: 'e89c5d1e-62b5-498b-858e-9293ff14a382',
            children: null
          },
          {
            id: 586,
            parentId: 578,
            text: 'Olingo',
            uuid: '3bd12394-ec6e-4b14-962a-7f01f513bb1b',
            children: null
          }
        ]
      },
      {
        id: 587,
        parentId: 1,
        text: 'H2 Database',
        uuid: '0540dbce-6a42-4c01-a157-c71c3469f2eb',
        children: null
      },
      {
        id: 588,
        parentId: 1,
        text: 'Olingo',
        uuid: '85faf239-82e2-4ab2-9943-1fa91ba0613a',
        children: [
          {
            id: 589,
            parentId: 588,
            text: 'Client',
            uuid: '9ba73f8e-7d3b-41fc-bb5e-c02853a47644',
            children: null
          },
          {
            id: 590,
            parentId: 588,
            text: 'Server',
            uuid: 'b43824b5-3146-4f78-9ebd-b025c5bd4cd0',
            children: [
              {
                id: 591,
                parentId: 590,
                text: 'OData v2',
                uuid: '66674126-d51b-4eff-9f56-2aeb1b7b8f29',
                children: null
              },
              {
                id: 592,
                parentId: 590,
                text: 'OData V2 结合JPA',
                uuid: '9f26d641-79e8-416c-9994-9223f1ad56d7',
                children: null
              },
              {
                id: 593,
                parentId: 590,
                text: 'OData v4',
                uuid: '54b6b345-4b56-4d82-b555-1cea268a5712',
                children: null
              }
            ]
          }
        ]
      },
      {
        id: 594,
        parentId: 1,
        text: 'JPA',
        uuid: 'f5e0774d-be6b-43e4-b5f4-ec4105e1a4d4',
        children: [
          {
            id: 595,
            parentId: 594,
            text: 'Annotation',
            uuid: 'c66a9a38-5612-49c4-a426-761397500e93',
            children: [
              {
                id: 596,
                parentId: 595,
                text: '@Entity',
                uuid: '7ff80026-3c9b-4f2f-9227-4e385ecc3e7c',
                children: null
              },
              {
                id: 597,
                parentId: 595,
                text: '@Table',
                uuid: '8b68cdf0-7889-4caf-a2b0-d32500123cb7',
                children: null
              },
              {
                id: 598,
                parentId: 595,
                text: '@Column',
                uuid: 'ace8f068-4aea-411d-9322-3fbf6d40ced9',
                children: null
              },
              {
                id: 599,
                parentId: 595,
                text: '@Transient',
                uuid: '071b0ae8-148d-4b22-8709-71a877966133',
                children: null
              },
              {
                id: 600,
                parentId: 595,
                text: '@Id',
                uuid: 'f285fe1c-b789-4a74-8b22-72e8db8c676e',
                children: null
              },
              {
                id: 601,
                parentId: 595,
                text: '@GeneratedValue',
                uuid: '37f7d8de-c5fa-40fe-b42f-ef532220a727',
                children: null
              },
              {
                id: 602,
                parentId: 595,
                text: '@Transactional',
                uuid: 'd6c5f007-c7d9-4a51-abc1-1fa5a3567b23',
                children: null
              },
              {
                id: 603,
                parentId: 595,
                text: '@Cacheable',
                uuid: '4f3ed14b-d0f3-4bc4-b54c-52a84f76ccb4',
                children: null
              },
              {
                id: 604,
                parentId: 595,
                text: '@Cache',
                uuid: '06722e46-53b2-4b36-a98e-868e2748f54d',
                children: null
              },
              {
                id: 605,
                parentId: 595,
                text: '@Embeddable',
                uuid: 'fdbb0070-d649-4326-80c8-69543285da0a',
                children: null
              },
              {
                id: 606,
                parentId: 595,
                text: '@EmbeddedId',
                uuid: '5e46f30e-ad62-4d17-b593-5bdd94dc1559',
                children: null
              }
            ]
          },
          {
            id: 607,
            parentId: 594,
            text: 'JPA Entity/Context',
            uuid: '656c4c84-5c91-4fc3-9817-f4f9b6b798a3',
            children: null
          },
          {
            id: 608,
            parentId: 594,
            text: 'FetchType',
            uuid: '84e88a9e-255a-4490-a2c6-a81d5a141e3d',
            children: null
          },
          {
            id: 609,
            parentId: 594,
            text: 'CascadeType',
            uuid: '675239dd-0c09-48d4-a594-93a04301ebfe',
            children: null
          },
          {
            id: 610,
            parentId: 594,
            text: '主键关联',
            uuid: '1dc3e01e-33ce-4672-81be-afe6cf1efe22',
            children: null
          },
          {
            id: 611,
            parentId: 594,
            text: '一对一关联',
            uuid: '077e0193-b6b5-4419-bf94-b246c6e616b1',
            children: null
          },
          {
            id: 612,
            parentId: 594,
            text: '一对多关联',
            uuid: '2966a0e8-ad86-4ace-a595-57559bef0ffc',
            children: [
              {
                id: 613,
                parentId: 612,
                text: '不设置Cascade',
                uuid: '3c47e645-e765-481c-8db5-308c4abb74a6',
                children: null
              },
              {
                id: 614,
                parentId: 612,
                text: 'Cascade在一方',
                uuid: '7b140167-d706-4ba4-8b50-f0d3c36f094f',
                children: null
              },
              {
                id: 615,
                parentId: 612,
                text: 'Cascade在多方',
                uuid: '0ac90f87-c390-4160-8269-bc14cc54cb07',
                children: null
              },
              {
                id: 616,
                parentId: 612,
                text: 'Cascade同时在一方，多方',
                uuid: '87a08141-5ade-4f08-97eb-31628bf55630',
                children: null
              }
            ]
          },
          {
            id: 617,
            parentId: 594,
            text: '多对多关联',
            uuid: '22175c89-6e39-4ac8-98cb-df57ebdd2571',
            children: [
              {
                id: 618,
                parentId: 617,
                text: 'Cascade在任意一方',
                uuid: 'd339e5bc-e505-41bc-9f8b-a34f1cb1597c',
                children: null
              }
            ]
          },
          {
            id: 619,
            parentId: 594,
            text: '联合主键',
            uuid: '4c14102c-396c-4515-bef1-c8c0d01fe284',
            children: null
          },
          {
            id: 620,
            parentId: 594,
            text: 'Repository',
            uuid: '77d4b8e1-33ee-4e51-b4b7-54baba87b770',
            children: null
          },
          {
            id: 621,
            parentId: 594,
            text: 'JPA Cache(eclipse link)',
            uuid: '693267bb-e9b1-425a-ae3c-86a1e853d53f',
            children: null
          },
          {
            id: 622,
            parentId: 594,
            text: 'Transaction',
            uuid: '6e1c339c-2520-4b51-bdf7-bd64e2f13fb5',
            children: null
          },
          {
            id: 623,
            parentId: 594,
            text: '使用实例',
            uuid: 'c23b9313-890b-439c-a570-d177bbc45f0e',
            children: [
              {
                id: 624,
                parentId: 623,
                text: '无级联关系，单独保存每个表',
                uuid: '74bc13d8-f460-48b7-9eee-0abef0dad04c',
                children: null
              },
              {
                id: 625,
                parentId: 623,
                text: '使用PERSIST、MERGE级联',
                uuid: '01ee95c0-4aa0-48c3-a52e-998aae27960b',
                children: null
              },
              {
                id: 626,
                parentId: 623,
                text: '级联删除',
                uuid: 'e8b02958-e3e3-4a74-9ede-8765451d7252',
                children: null
              },
              {
                id: 627,
                parentId: 623,
                text: 'Java层的缓存',
                uuid: 'd0d57a85-fe29-438a-9a09-1dbedc2bfff2',
                children: null
              },
              {
                id: 628,
                parentId: 623,
                text: '使用EntityManager保存',
                uuid: '9ed2f88d-d7eb-4442-9dc6-88101eba5215',
                children: null
              },
              {
                id: 629,
                parentId: 623,
                text: 'Embeddable类',
                uuid: '3dfd3456-2bdf-42e9-a2b5-7d8a965174ae',
                children: null
              },
              {
                id: 630,
                parentId: 623,
                text: '多个EntityManager, persistence context',
                uuid: '9b0e4692-0fb1-4fd8-bb0d-a96a5a4e71f4',
                children: null
              },
              {
                id: 631,
                parentId: 623,
                text: 'PERSIST只管新建，MERGE只管已存不管新建',
                uuid: 'b78f3ce9-2028-4e6f-80cc-cfd51232005f',
                children: null
              },
              {
                id: 632,
                parentId: 623,
                text: '使用Repository可能会有不回填的情况',
                uuid: '1a212bf3-0147-409e-9fa2-440fac9f7e0a',
                children: null
              },
              {
                id: 633,
                parentId: 623,
                text: 'EntityManager返回的对象唯一性',
                uuid: 'ed05d0f6-3497-4d5f-8d8f-3ec33279dd4a',
                children: null
              },
              {
                id: 634,
                parentId: 623,
                text: '保存时，当时java对象中的字段即为保存字段',
                uuid: '343256ee-b5a4-4ce3-befc-32bb7d4cec89',
                children: null
              },
              {
                id: 635,
                parentId: 623,
                text: '使用Repository级联保存级联对象为空问题',
                uuid: 'c3bbd1a0-1445-4828-8ca1-226985448ff4',
                children: null
              }
            ]
          }
        ]
      },
      {
        id: 636,
        parentId: 1,
        text: 'Liquibase',
        uuid: '9d8e8cf3-b91d-4f2e-8dc5-5a26963b568e',
        children: [
          {
            id: 637,
            parentId: 636,
            text: '简单例子',
            uuid: '3b17cc99-62b1-43c0-81cd-8887323a5fe0',
            children: null
          },
          {
            id: 638,
            parentId: 636,
            text: 'Basic',
            uuid: '3f4577bb-e273-45af-877e-828acba986e8',
            children: null
          },
          {
            id: 639,
            parentId: 636,
            text: '先决条件',
            uuid: '5da164b8-30f9-4281-af1f-81f3d4b114b5',
            children: null
          },
          {
            id: 640,
            parentId: 636,
            text: 'Context',
            uuid: '0b0aa44c-26f8-4c84-8dfd-06a35ff94551',
            children: null
          },
          {
            id: 641,
            parentId: 636,
            text: 'Changelog参数',
            uuid: '4a59eac2-06f6-4d72-ad95-1bb198b068d2',
            children: null
          }
        ]
      },
      {
        id: 642,
        parentId: 1,
        text: 'Mockito单元测试',
        uuid: '27eb5ffd-bb5a-4c54-acc3-9122573c3065',
        children: [
          {
            id: 643,
            parentId: 642,
            text: 'Mock',
            uuid: '1cc9daf7-1cf4-43a4-84b1-d07f6f81b268',
            children: null
          },
          {
            id: 644,
            parentId: 642,
            text: 'InjectMocks',
            uuid: '2a64f06a-0974-45d8-aff9-55038138e70e',
            children: null
          }
        ]
      },
      {
        id: 645,
        parentId: 1,
        text: 'Powermock单元测试',
        uuid: 'bdc3bb72-7210-4a97-9e43-c224d83860b3',
        children: null
      },
      {
        id: 646,
        parentId: 1,
        text: 'Groovy',
        uuid: 'ceee09b6-d305-40cf-bdb2-e048aa3044b6',
        children: [
          {
            id: 647,
            parentId: 646,
            text: 'Basic',
            uuid: '3ac59096-0c4c-4517-b073-3a31e2d18c2a',
            children: [
              {
                id: 648,
                parentId: 647,
                text: '注释',
                uuid: '2373868c-078a-4df7-9bec-6d578f183daa',
                children: null
              },
              {
                id: 649,
                parentId: 647,
                text: '闭包',
                uuid: '1b5dbfd1-d53c-42f0-a77a-ad17ab0746b7',
                children: null
              },
              {
                id: 650,
                parentId: 647,
                text: '三双引号字符串',
                uuid: 'ae2dd109-4889-4d49-9d9c-b7b03de75fe9',
                children: null
              },
              {
                id: 651,
                parentId: 647,
                text: '列表',
                uuid: '72ccab96-b1a1-4458-9723-a1de6b57852c',
                children: null
              },
              {
                id: 652,
                parentId: 647,
                text: '数组',
                uuid: '25b7c63f-0c6b-47ea-9499-5a99f1d1e449',
                children: null
              },
              {
                id: 653,
                parentId: 647,
                text: '键值数组',
                uuid: 'aee51daf-670d-428c-85fb-8d06a5964e8e',
                children: null
              },
              {
                id: 654,
                parentId: 647,
                text: '函数',
                uuid: '36183d2f-0236-4ae7-b832-ef14d7367bdc',
                children: null
              }
            ]
          }
        ]
      },
      {
        id: 655,
        parentId: 1,
        text: 'Unicode utf8 utf16',
        uuid: '2545f113-3066-48a8-bcef-2b2407375569',
        children: null
      },
      {
        id: 656,
        parentId: 1,
        text: 'Node JS',
        uuid: 'adc3b20c-81a0-4705-9578-ee35ca3cce54',
        children: [
          {
            id: 657,
            parentId: 656,
            text: '最简单的web服务',
            uuid: '11c22e22-f36d-49a6-a66f-553b04e3aee9',
            children: null
          },
          {
            id: 658,
            parentId: 656,
            text: '包',
            uuid: '3f011ef3-80a8-4755-a2ec-fe3984b75f16',
            children: null
          },
          {
            id: 659,
            parentId: 656,
            text: '全局变量',
            uuid: '5aeca386-57f5-4396-8a2d-c1f633f7dec7',
            children: null
          },
          {
            id: 660,
            parentId: 656,
            text: '事件events',
            uuid: '4a44e19b-ae8c-4a11-9a8c-4e4909649521',
            children: null
          },
          {
            id: 661,
            parentId: 656,
            text: 'http.Server事件',
            uuid: '2a8fbd72-cad4-4e0c-9bbf-abe5ab299aa6',
            children: null
          },
          {
            id: 662,
            parentId: 656,
            text: 'RESTful',
            uuid: '042fa456-64e5-4e4d-a030-5a6e56b152a0',
            children: null
          },
          {
            id: 663,
            parentId: 656,
            text: 'TCP服务器',
            uuid: 'e6b8ac2b-0efa-4351-b4eb-eca22b103319',
            children: null
          },
          {
            id: 664,
            parentId: 656,
            text: '作为客户端',
            uuid: '5448e204-28fb-435f-99d4-96464248afe0',
            children: null
          },
          {
            id: 665,
            parentId: 656,
            text: 'Express框架',
            uuid: '60b55813-96e8-4fa7-be7d-2817fc6dc25e',
            children: null
          },
          {
            id: 666,
            parentId: 656,
            text: 'MySQL连接',
            uuid: 'e8a555f5-2d32-4019-88d9-1bde0343edc9',
            children: null
          },
          {
            id: 667,
            parentId: 656,
            text: 'MangoDB连接',
            uuid: '9d975e8e-873c-4bfa-ba69-8d0e1d982963',
            children: null
          },
          {
            id: 668,
            parentId: 656,
            text: 'EJS',
            uuid: 'e571c2ac-8c0e-497b-a7e6-73f9eaefb06b',
            children: null
          },
          {
            id: 669,
            parentId: 656,
            text: 'Jade',
            uuid: '81eba48c-3666-461d-824f-598a528bb93e',
            children: null
          }
        ]
      },
      {
        id: 670,
        parentId: 1,
        text: 'React',
        uuid: '78799372-a8bb-45c6-9992-2d5674973ce4',
        children: [
          {
            id: 671,
            parentId: 670,
            text: 'Basic',
            uuid: '787a47b5-74df-48cf-a9fc-69f7ab2b6317',
            children: null
          },
          {
            id: 672,
            parentId: 670,
            text: '类',
            uuid: '1d52f82d-4b43-48ad-b450-28fd1caae3f9',
            children: null
          },
          {
            id: 673,
            parentId: 670,
            text: 'Import/export',
            uuid: 'af7b961d-6af1-43a7-a38b-a51250b4b3ae',
            children: null
          },
          {
            id: 674,
            parentId: 670,
            text: '组件/State',
            uuid: '5fc35948-452c-4298-8915-2927f4f56f99',
            children: null
          },
          {
            id: 675,
            parentId: 670,
            text: '事件处理',
            uuid: '3eff6085-5f3e-44a3-a64e-bbd224990c82',
            children: null
          },
          {
            id: 676,
            parentId: 670,
            text: '遍历数组',
            uuid: '274a6632-d1e5-480e-a0ec-2dac94d4d394',
            children: null
          },
          {
            id: 677,
            parentId: 670,
            text: '表单',
            uuid: '4d751bd0-77a0-444b-8484-f0e4820239e7',
            children: null
          },
          {
            id: 678,
            parentId: 670,
            text: 'CSS',
            uuid: '5c28e209-f95a-4697-895f-108431cff593',
            children: null
          },
          {
            id: 679,
            parentId: 670,
            text: '共享数据上移',
            uuid: 'ceddc6b4-be90-45f6-9959-f817abb2b819',
            children: null
          },
          {
            id: 680,
            parentId: 670,
            text: '组合即继承',
            uuid: '2f3b9bd4-5518-4262-9294-19057de70477',
            children: null
          },
          {
            id: 681,
            parentId: 670,
            text: 'React思路',
            uuid: '1684815e-d74e-4798-9d47-3dd08eb45f63',
            children: null
          },
          {
            id: 1192,
            parentId: 670,
            text: 'TypeScript组件定义',
            uuid: '3da7ec67-9594-4304-8fb4-92344a667a0c',
            children: null
          },
          {
            id: 1193,
            parentId: 670,
            text: 'useEffect',
            uuid: 'c40fe49f-b3c9-4935-8307-54e1ee031a45',
            children: null
          },
          {
            id: 1196,
            parentId: 670,
            text: '包',
            uuid: 'c449ddd6-f539-4b85-bec5-6a0ef40849b8',
            children: null
          }
        ]
      },
      {
        id: 682,
        parentId: 1,
        text: 'NPM',
        uuid: '98ce0905-8d5d-46f4-9f1d-67a3cc1c575b',
        children: null
      },
      {
        id: 683,
        parentId: 1,
        text: 'Gulp',
        uuid: 'cfc4172c-cd79-4a6e-bbe7-213fb308ed98',
        children: null
      },
      {
        id: 684,
        parentId: 1,
        text: 'Flux',
        uuid: '32082088-6ba5-4e3b-add7-846b1754db4e',
        children: null
      },
      {
        id: 685,
        parentId: 1,
        text: 'Redux',
        uuid: 'f324dc7e-04d5-44c6-8c1f-665a65fd164c',
        children: [
          {
            id: 686,
            parentId: 685,
            text: 'Basic',
            uuid: '0fa8e84c-6259-4a70-bab7-e05887682d0f',
            children: null
          },
          {
            id: 687,
            parentId: 685,
            text: '中间件和异步操作',
            uuid: 'f632979b-551c-4cb2-ab63-86057cc45674',
            children: null
          },
          {
            id: 688,
            parentId: 685,
            text: 'React-Redux',
            uuid: '5b50ce9b-d546-4221-a362-63a793e01a28',
            children: null
          }
        ]
      },
      {
        id: 689,
        parentId: 1,
        text: 'Webpack',
        uuid: '20a3bc13-af9a-4f52-aa83-038f25ca065e',
        children: [
          {
            id: 690,
            parentId: 689,
            text: 'Demo',
            uuid: '9a4f5646-5776-4af6-b550-10ff7c501bcc',
            children: null
          },
          {
            id: 691,
            parentId: 689,
            text: 'webpack.config.js',
            uuid: 'be19af9c-a819-4a49-a673-fa41ccbd4977',
            children: null
          }
        ]
      },
      {
        id: 692,
        parentId: 1,
        text: 'YML格式',
        uuid: '891a86c7-c58d-4b68-9ef2-becf4fee691f',
        children: null
      },
      {
        id: 693,
        parentId: 1,
        text: 'JQuery',
        uuid: '4dd787f3-8af1-48bf-ba7a-44312029f15b',
        children: [
          {
            id: 694,
            parentId: 693,
            text: 'Basic',
            uuid: '5fe2ecbb-b727-49cc-8b94-76f9dbd4b9ba',
            children: null
          },
          {
            id: 695,
            parentId: 693,
            text: 'JQuery chosen在div modal下宽度为0问题',
            uuid: '37037329-b99a-4c93-98ee-e59e1a4037cd',
            children: null
          },
          {
            id: 696,
            parentId: 693,
            text: 'JQuery chosen 设置选项值及选项动态添加',
            uuid: '32e47b5d-b945-4e11-a560-660e4ed99cdf',
            children: null
          },
          {
            id: 697,
            parentId: 693,
            text: 'JQuery fullCalendar 宽度问题',
            uuid: '9c26da0f-0d85-47c5-8553-268319bf76a1',
            children: null
          },
          {
            id: 698,
            parentId: 693,
            text: 'JQuery datetimepicker',
            uuid: '1e7613bb-219a-42e0-ac0b-0e8acf8922ac',
            children: null
          },
          {
            id: 699,
            parentId: 693,
            text: 'JQuery事件冒泡',
            uuid: 'f9b544fe-bb38-45ce-b762-2fe0a05533fd',
            children: null
          },
          {
            id: 700,
            parentId: 693,
            text: '插件写法',
            uuid: '971d04b6-aecc-4510-a3ff-8e9446f0877d',
            children: null
          },
          {
            id: 701,
            parentId: 693,
            text: 'JQuery post文件',
            uuid: '1b89f3e4-3d96-4dd0-8510-00c2f33f725b',
            children: null
          }
        ]
      },
      {
        id: 702,
        parentId: 1,
        text: 'AMD规范 & RequireJS',
        uuid: 'cddce76f-b78e-4613-9b4c-bfdf30a757ca',
        children: null
      },
      {
        id: 703,
        parentId: 1,
        text: 'NoSQL',
        uuid: '1c438f71-8c91-4946-9f7d-0ac7ff8a1ded',
        children: [
          {
            id: 704,
            parentId: 703,
            text: 'MongoDB',
            uuid: '6a984daf-1c10-42b7-92f3-233cc90b3729',
            children: [
              {
                id: 1187,
                parentId: 704,
                text: '基本命令',
                uuid: 'fa658387-f08a-42fd-8cb6-5a922039666d',
                children: null
              }
            ]
          },
          {
            id: 705,
            parentId: 703,
            text: 'Redis',
            uuid: '57cac171-ecc4-4b90-b48b-198035211f50',
            children: null
          }
        ]
      },
      {
        id: 706,
        parentId: 1,
        text: 'Sqlite',
        uuid: 'bf8141f0-e191-47a9-9ee2-885c11a27a7b',
        children: null
      },
      {
        id: 707,
        parentId: 1,
        text: 'CSS',
        uuid: 'e0e0a449-decb-49e7-b93a-80dc195862f5',
        children: [
          {
            id: 708,
            parentId: 707,
            text: '常见属性',
            uuid: '44ad285b-89de-4fc8-9304-2fd455c17281',
            children: null
          },
          {
            id: 709,
            parentId: 707,
            text: '固定在屏幕中间的div，不随滚动条滚动',
            uuid: '5671980d-82d2-4300-b3ab-8b81b1c76ef6',
            children: null
          },
          {
            id: 710,
            parentId: 707,
            text: 'float',
            uuid: '0111e6f8-0821-4eed-99f6-f56291343741',
            children: null
          }
        ]
      },
      {
        id: 711,
        parentId: 1,
        text: 'Swift',
        uuid: '8ed417f3-d6d0-43ac-9f93-fc62a0a3a51d',
        children: [
          {
            id: 712,
            parentId: 711,
            text: 'var let',
            uuid: '20d54176-809c-45cc-9132-b1e9ae549441',
            children: null
          },
          {
            id: 713,
            parentId: 711,
            text: '数组字典',
            uuid: '620f428c-dc7b-4c71-905e-217f24657198',
            children: null
          },
          {
            id: 714,
            parentId: 711,
            text: 'for if switch while',
            uuid: 'bffc217c-dce1-44f7-9551-87e47e6cf3e8',
            children: null
          },
          {
            id: 715,
            parentId: 711,
            text: '==和===',
            uuid: '9e4b3605-0bee-4f3d-97bd-5d149550a3a7',
            children: null
          },
          {
            id: 716,
            parentId: 711,
            text: '函数',
            uuid: 'db56c4a3-3ad4-4fa9-9ab2-16733b594330',
            children: null
          },
          {
            id: 717,
            parentId: 711,
            text: '扩展类方法',
            uuid: '5cabf61e-21e9-4530-a9a8-0c5a4c6870d0',
            children: null
          },
          {
            id: 718,
            parentId: 711,
            text: '重载操作符',
            uuid: '9972bb2f-30db-4dd2-8cca-20b6cf2a2706',
            children: null
          },
          {
            id: 719,
            parentId: 711,
            text: '闭包函数',
            uuid: '34525836-61df-4a67-853b-809c6e7f14de',
            children: null
          },
          {
            id: 720,
            parentId: 711,
            text: '类',
            uuid: '15b9d307-4844-4e82-a41e-2a4b4f4490ae',
            children: null
          },
          {
            id: 721,
            parentId: 711,
            text: '!和？',
            uuid: '01afe600-ce71-4aba-9711-4b9b458c9253',
            children: null
          },
          {
            id: 722,
            parentId: 711,
            text: 'try? do catch异常处理',
            uuid: '148f178e-1df7-4334-889e-b4b8809ec41f',
            children: null
          },
          {
            id: 723,
            parentId: 711,
            text: 'enum枚举',
            uuid: '12962b9c-3883-40f6-ae78-a42d26852d0c',
            children: null
          },
          {
            id: 724,
            parentId: 711,
            text: 'struct结构体',
            uuid: '21bf765e-deb7-4d42-87fc-f975bb7b7849',
            children: null
          },
          {
            id: 725,
            parentId: 711,
            text: '接口 extension',
            uuid: '2f07c58d-99e2-4aa0-b0f5-6ce47aeee8e1',
            children: null
          }
        ]
      },
      {
        id: 726,
        parentId: 1,
        text: 'Angular JS',
        uuid: '78c6d8c9-5279-49a1-821c-ebb262a8daac',
        children: [
          {
            id: 727,
            parentId: 726,
            text: 'Basic',
            uuid: 'e721c946-a48d-4a01-b5e7-0953116184c6',
            children: null
          },
          {
            id: 728,
            parentId: 726,
            text: '$watch',
            uuid: '2b58799d-c597-4004-b07a-c9f8abecce49',
            children: null
          },
          {
            id: 729,
            parentId: 726,
            text: 'Filter',
            uuid: 'c8c0df4e-637f-4dc6-81d2-71141c63053c',
            children: null
          },
          {
            id: 730,
            parentId: 726,
            text: '$http',
            uuid: '2bf39af3-9929-412e-9c4b-0f32449a2410',
            children: null
          },
          {
            id: 731,
            parentId: 726,
            text: '$apply',
            uuid: 'f84157bb-cd01-4517-b000-70d55acc834c',
            children: null
          },
          {
            id: 732,
            parentId: 726,
            text: '$服务',
            uuid: '25c249ae-15c6-4218-bb76-7c59d258c276',
            children: null
          },
          {
            id: 733,
            parentId: 726,
            text: 'Form',
            uuid: '1ba81489-503e-4107-9558-3157bb10174b',
            children: null
          },
          {
            id: 734,
            parentId: 726,
            text: '$q defer & promise',
            uuid: '6f2d5fbe-c897-4273-80e3-2549b673e54e',
            children: null
          },
          {
            id: 735,
            parentId: 726,
            text: '自定义html标签',
            uuid: '058a4a0e-0b69-4e76-8fd6-3e1daf0554a9',
            children: null
          },
          {
            id: 736,
            parentId: 726,
            text: '一个分页例子',
            uuid: '36e1da33-3301-4ebc-841c-ac843dae79fe',
            children: null
          }
        ]
      },
      {
        id: 737,
        parentId: 1,
        text: 'Angular2',
        uuid: 'd61c876e-7e08-4b0f-968a-8c1f147cdb79',
        children: [
          {
            id: 738,
            parentId: 737,
            text: 'package.json',
            uuid: '463dcd70-d247-435a-a226-56daacc80d4d',
            children: null
          },
          {
            id: 739,
            parentId: 737,
            text: 'systemjs.config.js',
            uuid: '04c7a109-d61e-4f40-b6b4-e24725f18945',
            children: null
          },
          {
            id: 740,
            parentId: 737,
            text: 'tsconfig.json',
            uuid: 'f141f7cd-7847-45cf-8d4d-b023cf3965c8',
            children: null
          },
          {
            id: 741,
            parentId: 737,
            text: 'typings.json',
            uuid: 'b115c99a-c94a-4ab1-ba85-ff554e0fae16',
            children: null
          },
          {
            id: 742,
            parentId: 737,
            text: 'Basic',
            uuid: '804e123d-d62e-46cc-962b-c31251b16c7a',
            children: null
          },
          {
            id: 743,
            parentId: 737,
            text: 'Template',
            uuid: '3110ce3b-2752-476a-ae65-25d380088911',
            children: null
          },
          {
            id: 744,
            parentId: 737,
            text: '数据绑定ngModel',
            uuid: 'c2aa8e3d-18a1-4aca-8a75-9b0e025090a6',
            children: null
          },
          {
            id: 745,
            parentId: 737,
            text: 'ng*关键字',
            uuid: 'aa935c70-8deb-4d5e-a964-57ce487746da',
            children: [
              {
                id: 746,
                parentId: 745,
                text: 'ngFor',
                uuid: '4c39a091-ebe2-4265-86a9-87faf46f522b',
                children: null
              },
              {
                id: 747,
                parentId: 745,
                text: 'ngSwitch',
                uuid: 'c427828d-f910-44fb-a510-e61366272ed4',
                children: null
              },
              {
                id: 748,
                parentId: 745,
                text: 'ngIf',
                uuid: '88dea5e1-0fd4-48fd-b91c-6c54535826ca',
                children: null
              }
            ]
          },
          {
            id: 749,
            parentId: 737,
            text: 'Component参数传入传出',
            uuid: '5bd743c1-9624-4e46-859e-5e6141a42da6',
            children: null
          },
          {
            id: 750,
            parentId: 737,
            text: '事件绑定及输出',
            uuid: '5f36f8bf-d868-478a-80e2-4cd0f69022f7',
            children: null
          },
          {
            id: 751,
            parentId: 737,
            text: 'Service注入',
            uuid: '2e4a9cb8-629c-4fdb-b809-2a3720b25c60',
            children: null
          },
          {
            id: 752,
            parentId: 737,
            text: '生命周期',
            uuid: '2952e2af-2416-4d51-86dc-386dac8a6a5c',
            children: [
              {
                id: 753,
                parentId: 752,
                text: 'ngOnInit',
                uuid: '9720624b-6cce-4c81-b2fd-2d33913ff184',
                children: null
              },
              {
                id: 754,
                parentId: 752,
                text: 'ngOnChanges',
                uuid: 'e3899068-58f3-461f-81f4-048e6aa6ceb4',
                children: null
              },
              {
                id: 755,
                parentId: 752,
                text: 'ngDoCheck',
                uuid: '3f589168-f3ef-4914-91de-28c7fb569b02',
                children: null
              },
              {
                id: 756,
                parentId: 752,
                text: 'ngAfterContentInit',
                uuid: 'c0c8a12f-9b83-43f5-99b2-2895dd65c05f',
                children: null
              },
              {
                id: 757,
                parentId: 752,
                text: 'ngAfterContentChecked',
                uuid: '68831c08-c935-48bf-bbff-142b8a9c2e7b',
                children: null
              },
              {
                id: 758,
                parentId: 752,
                text: 'ngAfterViewInit',
                uuid: 'af01561a-2f0c-479f-ad9a-3c84c1c609e9',
                children: null
              },
              {
                id: 759,
                parentId: 752,
                text: 'ngAfterViewChecked',
                uuid: '571466c2-6a7f-4c34-8a46-4451644e6018',
                children: null
              },
              {
                id: 760,
                parentId: 752,
                text: 'ngOnDestroy',
                uuid: '1d4f16e6-3e9c-4a48-8d11-01651dc8ab48',
                children: null
              }
            ]
          },
          {
            id: 761,
            parentId: 737,
            text: '异步操作',
            uuid: '9d73d5df-e5ae-455e-96ab-acb75df29343',
            children: null
          },
          {
            id: 762,
            parentId: 737,
            text: '页面route',
            uuid: 'f51e57fc-7c39-477f-bfca-22cdcefeaa41',
            children: null
          },
          {
            id: 763,
            parentId: 737,
            text: '使用HTTP包',
            uuid: '16954eeb-ebb3-4d9d-95e3-dc0a14e4c3f8',
            children: null
          },
          {
            id: 764,
            parentId: 737,
            text: 'Animation动画',
            uuid: '3137eee1-2bcd-4604-a80d-7b0d5d61f827',
            children: null
          },
          {
            id: 765,
            parentId: 737,
            text: 'End2End Test',
            uuid: 'd6021871-af9b-4ddb-9f3a-e0f0196ba89f',
            children: null
          },
          {
            id: 766,
            parentId: 737,
            text: 'Deploy & nginx',
            uuid: 'e8a70bf2-4691-411e-a34e-faa0c2ef9727',
            children: null
          },
          {
            id: 767,
            parentId: 737,
            text: '使用ngx-dropdown',
            uuid: 'b5d9bf17-a9b9-4e18-9fbe-4e2cf0619819',
            children: null
          },
          {
            id: 768,
            parentId: 737,
            text: 'Bootstrap collapse',
            uuid: '344ca09c-1671-443d-b294-d81f4ac47586',
            children: null
          },
          {
            id: 769,
            parentId: 737,
            text: '使用ng-cookie',
            uuid: 'fa3b25e8-1230-4f48-aca8-6368075c5a6a',
            children: null
          },
          {
            id: 770,
            parentId: 737,
            text: '使用ng2-file-upload',
            uuid: '851fe337-1f88-4744-9a6b-f680ecff5af9',
            children: null
          },
          {
            id: 771,
            parentId: 737,
            text: '使用EXIF',
            uuid: '853aa7bc-06bb-448b-8635-195b92955e2b',
            children: null
          },
          {
            id: 772,
            parentId: 737,
            text: '直接显示html内容',
            uuid: '29d41450-69da-4c17-99fe-01516df8d534',
            children: null
          }
        ]
      },
      {
        id: 773,
        parentId: 1,
        text: 'ECMAScript / Javascript etc',
        uuid: 'cd02c65e-8739-4092-9588-4fa67afa0c71',
        children: null
      },
      {
        id: 774,
        parentId: 1,
        text: 'Javascript',
        uuid: '4db93cf0-adad-43cc-9555-742395095376',
        children: [
          {
            id: 775,
            parentId: 774,
            text: 'Basic',
            uuid: '64dffb3b-eb9d-4f5f-9316-250b9a15ea93',
            children: null
          },
          {
            id: 776,
            parentId: 774,
            text: 'Window',
            uuid: 'a2c2cb84-60bd-4739-b4fd-b0c473523f8a',
            children: null
          },
          {
            id: 777,
            parentId: 774,
            text: '类定义',
            uuid: '63bdea16-fe58-463d-976a-5c4c677f947c',
            children: null
          },
          {
            id: 778,
            parentId: 774,
            text: 'arguments',
            uuid: '63e757d2-576f-4eed-be42-bc779d459b50',
            children: null
          },
          {
            id: 779,
            parentId: 774,
            text: '闭包',
            uuid: '2c97226c-7f34-45e2-8e85-d5bc8f68555f',
            children: null
          },
          {
            id: 780,
            parentId: 774,
            text: '正则',
            uuid: '01ccad68-2ed0-49b9-828a-a1d2ae1df488',
            children: null
          },
          {
            id: 781,
            parentId: 774,
            text: '箭头函数',
            uuid: '42f7e5c5-1925-4a3b-8b09-8b9d2788e13e',
            children: null
          },
          {
            id: 782,
            parentId: 774,
            text: '==& ===',
            uuid: 'c060484a-7942-49e0-819a-7462629daca7',
            children: null
          },
          {
            id: 783,
            parentId: 774,
            text: 'this的判断',
            uuid: 'a25a4050-2cd0-4eb1-bda9-5590023d1856',
            children: null
          },
          {
            id: 784,
            parentId: 774,
            text: 'Exception',
            uuid: 'e6f51b16-afa5-48e9-884f-c0973f8dfcd1',
            children: null
          },
          {
            id: 785,
            parentId: 774,
            text: 'ES6 …符号',
            uuid: 'bfc2e2e5-3309-44a7-9d32-90a08142c5c3',
            children: null
          },
          {
            id: 786,
            parentId: 774,
            text: 'SHA1 javascript版',
            uuid: 'b1a7c362-c327-4cdb-8320-f5c94e56ac8c',
            children: null
          },
          {
            id: 787,
            parentId: 774,
            text: '使用EXIF包修改上传图片',
            uuid: '4ec401c2-1e64-4e5d-ba6d-e834990292b2',
            children: null
          }
        ]
      },
      {
        id: 788,
        parentId: 1,
        text: 'TypeScript',
        uuid: '11af9ed3-b6ea-4701-84cc-d6b0cd7a39da',
        children: null
      },
      {
        id: 1168,
        parentId: 1,
        text: 'React umi',
        uuid: '539c1577-8a8e-494c-bf91-536ad2103be6',
        children: null
      },
      {
        id: 789,
        parentId: 1,
        text: 'SVG矢量绘图',
        uuid: '0244db29-8ca1-4d65-8e14-04c49dbf2da1',
        children: [
          {
            id: 790,
            parentId: 789,
            text: '预定义图形',
            uuid: 'c03aa2a0-dddd-45c9-9b4e-443c9c8cea0b',
            children: [
              {
                id: 791,
                parentId: 790,
                text: '<rect>',
                uuid: '459de060-f2ff-4f46-a493-239684d35c85',
                children: null
              },
              {
                id: 792,
                parentId: 790,
                text: '<circle>',
                uuid: 'fa3487d1-5c51-4798-a52c-7b594edc074c',
                children: null
              },
              {
                id: 793,
                parentId: 790,
                text: '<ellipse>',
                uuid: '2c766014-ba7a-4806-b162-7cd24a81dcd7',
                children: null
              },
              {
                id: 794,
                parentId: 790,
                text: '<line>',
                uuid: 'c77476f6-002d-45dc-9676-80bc71c7207c',
                children: null
              },
              {
                id: 795,
                parentId: 790,
                text: '<polyline>',
                uuid: 'bfe2695f-8254-4689-8116-7a8338c3c6fb',
                children: null
              },
              {
                id: 796,
                parentId: 790,
                text: '<polygon>',
                uuid: 'b2a5c89c-8046-453c-9a07-2ea7734a5ab4',
                children: null
              },
              {
                id: 797,
                parentId: 790,
                text: '<path>',
                uuid: '91ffe77d-e565-4a37-babb-a292d88b37b6',
                children: null
              }
            ]
          },
          {
            id: 798,
            parentId: 789,
            text: '滤镜',
            uuid: '90958110-d6c2-4ad5-9671-2827716b23e3',
            children: null
          },
          {
            id: 799,
            parentId: 789,
            text: '渐变',
            uuid: '6bd515ad-7a09-41e1-b6c6-6dbf688da8fc',
            children: null
          }
        ]
      },
      {
        id: 800,
        parentId: 1,
        text: '邮件服务',
        uuid: '7704ae11-30f3-4480-bc99-6cedc62d32f9',
        children: null
      },
      {
        id: 801,
        parentId: 1,
        text: 'WebGL',
        uuid: '959ae0f1-5417-4e9d-9f34-984b41e34ecd',
        children: [
          {
            id: 802,
            parentId: 801,
            text: 'Basic及画单点',
            uuid: '7627d47b-f728-46c4-bfd2-bbc61b5522e2',
            children: null
          },
          {
            id: 803,
            parentId: 801,
            text: 'Attribute uniform varying',
            uuid: '441fe6bc-ca74-420c-803f-821d7c1377df',
            children: null
          },
          {
            id: 804,
            parentId: 801,
            text: '画多点',
            uuid: '991ac0b0-7f09-4c23-b9d1-9097ac27bbe4',
            children: null
          },
          {
            id: 805,
            parentId: 801,
            text: '坐标平移',
            uuid: 'eebe8021-282e-45af-90b1-ac8468807f2b',
            children: null
          },
          {
            id: 806,
            parentId: 801,
            text: '旋转',
            uuid: 'de74f265-cb54-4790-9d98-b270a782c7ef',
            children: null
          },
          {
            id: 807,
            parentId: 801,
            text: '基本动画',
            uuid: 'f644ec03-3c3a-4272-817a-516794b40ef2',
            children: null
          },
          {
            id: 808,
            parentId: 801,
            text: 'hape assembly & Rasterization',
            uuid: 'fd77151b-e650-4e75-9ae5-2a1b9cf336c4',
            children: null
          },
          {
            id: 809,
            parentId: 801,
            text: '贴图',
            uuid: '70a988d8-6cbc-4029-8caf-b4c1db903352',
            children: null
          },
          {
            id: 810,
            parentId: 801,
            text: 'GLSL ES基本语法',
            uuid: 'a68780d7-a603-40b9-a868-f85dcef07960',
            children: null
          },
          {
            id: 811,
            parentId: 801,
            text: '3D世界',
            uuid: 'd5ab29d5-f6ec-4143-8abd-924f3bb5f674',
            children: null
          },
          {
            id: 812,
            parentId: 801,
            text: '光线',
            uuid: '81a4a7f9-a025-49a2-9a25-9cac2d5084c7',
            children: null
          }
        ]
      },
      {
        id: 813,
        parentId: 1,
        text: 'Cocos2d js',
        uuid: 'd836ef83-7250-4d8c-a420-813db538210e',
        children: null
      },
      {
        id: 814,
        parentId: 1,
        text: 'Golang',
        uuid: '2ac6f44e-5417-4db9-a301-d1ea1ea52d10',
        children: [
          {
            id: 815,
            parentId: 814,
            text: 'Basic',
            uuid: '08851174-e181-413b-9d26-9cca5184226c',
            children: [
              {
                id: 1119,
                parentId: 815,
                text: '流程控制',
                uuid: '2f5fb7cf-a28e-4f80-a0af-8077c76ece53',
                children: null
              },
              {
                id: 1114,
                parentId: 815,
                text: '栈和堆、逃逸分析',
                uuid: '7cfd7c61-a90b-4f0d-9adf-183f77e67ad0',
                children: null
              },
              {
                id: 1134,
                parentId: 815,
                text: '指针、取地址，取值(& *)',
                uuid: 'd4082e0c-d555-46c7-b7d1-af904a73b921',
                children: null
              },
              {
                id: 1169,
                parentId: 815,
                text: '日期',
                uuid: 'e48dc585-351a-48d8-829f-f04b229ea1ce',
                children: null
              },
              {
                id: 1189,
                parentId: 815,
                text: '测试testing',
                uuid: '7883a28f-d10f-405f-a37b-7fbfe7d74dac',
                children: null
              },
              {
                id: 1190,
                parentId: 815,
                text: '位运算符',
                uuid: 'ceccc013-fe92-46ac-8150-caa6c28dfe47',
                children: null
              }
            ]
          },
          {
            id: 817,
            parentId: 814,
            text: '函数',
            uuid: 'ce9ca5e6-6ea1-4d85-bead-1399baf0261b',
            children: [
              {
                id: 1115,
                parentId: 817,
                text: 'Base64编码',
                uuid: '51435367-4edc-45a9-80c9-45b7ff07752d',
                children: null
              },
              {
                id: 1116,
                parentId: 817,
                text: '读写文件',
                uuid: 'f8f458ea-d915-4ea2-98cd-92024124711f',
                children: null
              },
              {
                id: 1120,
                parentId: 817,
                text: 'struct与interface{}',
                uuid: '6c9d0548-5b53-47c5-b709-16047ff6d39a',
                children: null
              },
              {
                id: 1121,
                parentId: 817,
                text: 'defer延迟执行',
                uuid: 'e2d2dac3-1197-493d-8c38-04e598f9ec4a',
                children: null
              },
              {
                id: 1122,
                parentId: 817,
                text: 'errors 错误异常',
                uuid: '543ba0f0-3cf8-4aab-8eaf-30c897b9b370',
                children: null
              }
            ]
          },
          {
            id: 1118,
            parentId: 814,
            text: '容器：数组、slice，map，list',
            uuid: 'dd753a8f-8e8f-494e-aabc-66eaf9a3ec10',
            children: [
              {
                id: 1138,
                parentId: 1118,
                text: 'map多建索引例子',
                uuid: '52506f19-02b5-4558-90f2-d10038a1f8e7',
                children: null
              }
            ]
          },
          {
            id: 1128,
            parentId: 814,
            text: '并发goroutine，channel',
            uuid: '965af4d6-6356-442c-a8e5-7af96bd48fe4',
            children: [
              {
                id: 1137,
                parentId: 1128,
                text: 'goroutine注意点',
                uuid: '14f1c4a4-b80b-44a8-9fda-24422070afcd',
                children: null
              },
              {
                id: 1132,
                parentId: 1128,
                text: '同步、锁',
                uuid: 'f1507320-2977-4f09-b626-96b166b9642d',
                children: null
              },
              {
                id: 1129,
                parentId: 1128,
                text: 'time包',
                uuid: '0bfc93da-5a64-4eda-9e62-8a44688c21c7',
                children: null
              },
              {
                id: 1130,
                parentId: 1128,
                text: 'telnet tcp通信例子',
                uuid: 'bb57f779-b21d-45b0-9fa7-5054ea7b1db4',
                children: null
              },
              {
                id: 1139,
                parentId: 1128,
                text: 'tcp粘包处理',
                uuid: '6e69827d-3d25-4e3a-9308-aac4cf49a8ca',
                children: null
              },
              {
                id: 1174,
                parentId: 1128,
                text: 'concurrent map read and map write',
                uuid: 'b13d9219-1731-4d71-a6c0-ff69e85dc6b0',
                children: null
              }
            ]
          },
          {
            id: 1133,
            parentId: 814,
            text: '反射',
            uuid: '0d7c9d73-65d5-47b8-ac3e-b9f19f55129e',
            children: [
              {
                id: 1135,
                parentId: 1133,
                text: '利用反射输出结构体json',
                uuid: 'a4b2c230-ba83-44e5-be0a-94912dbc3a33',
                children: null
              }
            ]
          },
          {
            id: 1141,
            parentId: 814,
            text: '测试 testcase',
            uuid: '943040c0-4264-4b3f-a36e-c007b71fe03b',
            children: null
          },
          {
            id: 1163,
            parentId: 814,
            text: '使用ginkgo、gomega测试',
            uuid: 'dd59a870-3a19-4aa5-aab0-f09acbf6852a',
            children: null
          },
          {
            id: 1123,
            parentId: 814,
            text: 'net/http 包',
            uuid: '194caa9f-304c-46f9-a198-ebe3a04bbdbd',
            children: [
              {
                id: 1142,
                parentId: 1123,
                text: 'httpserver',
                uuid: 'a10e5348-0cc5-464f-8d84-49e3feef1846',
                children: [
                  {
                    id: 1147,
                    parentId: 1142,
                    text: 'html模板、表单',
                    uuid: '189f5c37-bad2-4d2d-a2e1-b4b6737842fa',
                    children: null
                  },
                  {
                    id: 1148,
                    parentId: 1142,
                    text: '连接mysql数据库',
                    uuid: 'bd327267-dd51-4e9a-acbc-2a9565639fb7',
                    children: null
                  }
                ]
              }
            ]
          },
          {
            id: 1143,
            parentId: 814,
            text: '文件处理',
            uuid: '1a0092f3-3f1e-4c1f-a20c-b412c42a88a3',
            children: null
          },
          {
            id: 1124,
            parentId: 814,
            text: 'json处理',
            uuid: 'b0ee16e3-4832-4db6-9c88-657f0f734db6',
            children: null
          },
          {
            id: 1144,
            parentId: 814,
            text: '正则表达式',
            uuid: '9846108e-f524-4ce1-a565-4066f3e75807',
            children: null
          },
          {
            id: 1125,
            parentId: 814,
            text: '读取命令行参数',
            uuid: 'd18c1ace-8efb-424c-8ff6-651764a7fda2',
            children: null
          },
          {
            id: 1126,
            parentId: 814,
            text: 'reflect',
            uuid: '998c47c7-5bab-4743-9d56-7828de1de7a3',
            children: null
          },
          {
            id: 1127,
            parentId: 814,
            text: '有限状态机FSM例子',
            uuid: '6de0d989-b7da-49c4-9af8-b06840db2d91',
            children: null
          },
          {
            id: 1146,
            parentId: 814,
            text: '使用docker部署web程序',
            uuid: '5ac8d9af-6235-4ebf-826a-b25c551c8ea4',
            children: null
          },
          {
            id: 1155,
            parentId: 814,
            text: '框架、库',
            uuid: '97708d13-3476-4bcb-9d6f-6e68d59f08f8',
            children: [
              {
                id: 1156,
                parentId: 1155,
                text: 'gin',
                uuid: 'c9db92a2-fc4a-4bd5-91b8-9fe9bf2fe62c',
                children: [
                  {
                    id: 1157,
                    parentId: 1156,
                    text: 'model绑定、验证',
                    uuid: '4171b9c3-0342-4520-8908-6d3158b83932',
                    children: null
                  }
                ]
              },
              {
                id: 1166,
                parentId: 1155,
                text: 'gobuffalo连接mysql例子',
                uuid: '7d15234e-ea8e-4ddd-907a-44a24cc5a650',
                children: null
              }
            ]
          },
          {
            id: 1175,
            parentId: 814,
            text: '模式',
            uuid: '93bef0f3-4887-40cd-b62e-5c527db313aa',
            children: [
              {
                id: 1176,
                parentId: 1175,
                text: '适配器Adapter',
                uuid: 'e80a3fb7-0668-4bfa-bce1-b0097962b8eb',
                children: null
              },
              {
                id: 1177,
                parentId: 1175,
                text: '桥接Bridge',
                uuid: '7f07c6a3-3bc4-4020-8a43-e952501eef32',
                children: null
              },
              {
                id: 1178,
                parentId: 1175,
                text: '组合composite',
                uuid: 'de790dbe-262d-44d1-9167-c0ba6bdd2b7c',
                children: null
              },
              {
                id: 1179,
                parentId: 1175,
                text: '装饰器Decorator',
                uuid: 'cc5bead3-cc3d-43d6-be8d-98f9a1293ac5',
                children: null
              },
              {
                id: 1180,
                parentId: 1175,
                text: '外观Facade',
                uuid: '91cf6cd6-e41f-4327-a6e6-389c6a47372e',
                children: null
              },
              {
                id: 1181,
                parentId: 1175,
                text: '享元flyweight',
                uuid: '798db896-2e41-418e-bddc-c21f8dfb4bdc',
                children: null
              },
              {
                id: 1182,
                parentId: 1175,
                text: '私有成员',
                uuid: 'ab8c98d9-4d19-440d-a542-f87093a9485e',
                children: null
              },
              {
                id: 1183,
                parentId: 1175,
                text: '代理Proxy',
                uuid: '7598ed99-2466-46dc-b4af-9de88d117228',
                children: null
              }
            ]
          }
        ]
      },
      {
        id: 818,
        parentId: 1,
        text: 'iOS',
        uuid: 'a4213702-6404-47de-afce-7081e009e18a',
        children: [
          {
            id: 819,
            parentId: 818,
            text: 'Xcode使用Object C static library',
            uuid: '6aa3f55a-e039-45eb-bf6c-cb16b811a27b',
            children: null
          },
          {
            id: 820,
            parentId: 818,
            text: 'xcodebuild基本命令',
            uuid: 'bf2de836-a04a-43f7-b8a3-71055a9c9475',
            children: null
          },
          {
            id: 821,
            parentId: 818,
            text: 'Iphone6上下黑边问题',
            uuid: '4f9fd73a-ce92-4a18-9cce-a177f8ec89cb',
            children: null
          },
          {
            id: 822,
            parentId: 818,
            text: 'iOS Certificate Provision profile',
            uuid: '83197e25-2bf3-4e0a-8804-bf48d93afae6',
            children: null
          },
          {
            id: 823,
            parentId: 818,
            text: 'Push notification',
            uuid: '3d1b7b5d-334a-4038-a0e8-9d0b34b9c960',
            children: null
          },
          {
            id: 824,
            parentId: 818,
            text: '异步转同步方法',
            uuid: 'bb111bb1-1489-44ef-8366-d95eb7e63f7a',
            children: null
          },
          {
            id: 825,
            parentId: 818,
            text: 'iOS md5 sha1 base64 category',
            uuid: 'ab275596-bfa6-4bd4-b9e4-5258dad80550',
            children: null
          },
          {
            id: 826,
            parentId: 818,
            text: 'iOS URL缓存',
            uuid: 'c6df9c2d-29b4-4769-b7f3-bb392596466c',
            children: null
          },
          {
            id: 827,
            parentId: 818,
            text: 'Json格式转换',
            uuid: 'af7b7cbb-1581-4d04-9217-fb0421ff4765',
            children: null
          },
          {
            id: 828,
            parentId: 818,
            text: '_Nonnull _Nullable',
            uuid: '61f945df-34e1-431b-83b2-f2a4f16fd8ee',
            children: null
          },
          {
            id: 829,
            parentId: 818,
            text: 'dispatch_async',
            uuid: '18b97e18-f7b1-4116-860a-a470cae9b683',
            children: null
          },
          {
            id: 830,
            parentId: 818,
            text: 'NSOperation NSOperationQueue NSOperationQueue',
            uuid: 'ec2893e3-da6f-48ff-b56a-7c228f1a86d9',
            children: null
          },
          {
            id: 831,
            parentId: 818,
            text: '循环引用',
            uuid: 'd2d45cfc-765a-40b4-bfc6-1ceb13980586',
            children: null
          },
          {
            id: 832,
            parentId: 818,
            text: '发送验证码后倒计时逻辑',
            uuid: '0f45c52a-a543-4548-985b-ca29c30cd4dd',
            children: null
          }
        ]
      },
      {
        id: 833,
        parentId: 1,
        text: 'Android',
        uuid: '0d199a93-b28c-4bf5-b7a9-301f0e6bfc8f',
        children: [
          {
            id: 834,
            parentId: 833,
            text: '生命周期',
            uuid: '0c64c843-3d1a-4eb1-950f-b931b1a0dc0b',
            children: null
          },
          {
            id: 835,
            parentId: 833,
            text: 'Toast框',
            uuid: 'f7752b8f-201a-4fc7-9d57-07a9034bffb1',
            children: null
          },
          {
            id: 836,
            parentId: 833,
            text: '跳转',
            uuid: '2946d3c1-d97e-4832-ad9c-6a0bb83dce9f',
            children: [
              {
                id: 837,
                parentId: 836,
                text: '从回退栈里删除',
                uuid: '33ccc788-ecdd-427f-bdd0-a1304e4a0f97',
                children: null
              }
            ]
          },
          {
            id: 838,
            parentId: 833,
            text: 'Fragment',
            uuid: '332b907b-643a-49c1-ab9e-369e928e9364',
            children: null
          },
          {
            id: 839,
            parentId: 833,
            text: '日志',
            uuid: 'fc493e7f-e4ab-4fa2-affd-bf25c800e8f3',
            children: null
          },
          {
            id: 840,
            parentId: 833,
            text: 'Activity处理其他Activity的返回值',
            uuid: 'efc99df7-71b7-432b-a9f1-2ab5358c56ed',
            children: null
          },
          {
            id: 841,
            parentId: 833,
            text: 'Tab controller',
            uuid: '0f1213ad-78cb-42bb-882f-1a7118df8433',
            children: null
          },
          {
            id: 842,
            parentId: 833,
            text: 'JSON数据转换',
            uuid: '10cc6392-cb3c-469c-9200-15412251c9fe',
            children: null
          },
          {
            id: 843,
            parentId: 833,
            text: 'HTTP请求及AsyncTask（Android）',
            uuid: '267e81b8-5290-4502-b95e-8ff13f922858',
            children: [
              {
                id: 844,
                parentId: 843,
                text: '发送Json (post)',
                uuid: '44c98d6a-2cda-46da-a9e4-ac262e7d90c2',
                children: null
              }
            ]
          },
          {
            id: 845,
            parentId: 833,
            text: '从网络获得图片',
            uuid: '7a6f2577-cfb5-4c76-8734-a2a070e65571',
            children: null
          },
          {
            id: 846,
            parentId: 833,
            text: '布局注入',
            uuid: '16b4b992-1455-47b5-abb3-67a5d2d4eccd',
            children: null
          },
          {
            id: 847,
            parentId: 833,
            text: '扫码功能 zxing',
            uuid: '1ead7004-51b5-4fc7-bb4e-d13959b6df48',
            children: null
          },
          {
            id: 848,
            parentId: 833,
            text: '支付宝集成',
            uuid: '8d26651c-aa79-4aea-99b1-69845a69b1f7',
            children: null
          },
          {
            id: 849,
            parentId: 833,
            text: 'Push notification',
            uuid: 'f32cff09-513c-4c48-8cf5-22aad07a5b1f',
            children: null
          },
          {
            id: 850,
            parentId: 833,
            text: '定时任务',
            uuid: 'c1891158-54dd-41f4-9ee1-45619f5a4796',
            children: null
          }
        ]
      },
      {
        id: 851,
        parentId: 1,
        text: '加解密',
        uuid: '2fd9abb0-a793-48dd-bf75-f8e82a742068',
        children: [
          {
            id: 852,
            parentId: 851,
            text: 'Base64',
            uuid: 'e17adc84-9535-4297-b402-c29174521be5',
            children: null
          },
          {
            id: 853,
            parentId: 851,
            text: '3DES',
            uuid: '7c05fc01-d391-4050-bea5-0fe38226c0f7',
            children: [
              {
                id: 854,
                parentId: 853,
                text: 'iOS加解密代码',
                uuid: '7f798ba6-58b4-47b2-8a84-37f15f361459',
                children: null
              },
              {
                id: 855,
                parentId: 853,
                text: 'Python后端服务解密',
                uuid: '81ed11f0-1a49-42df-8d5d-17ab03304c7a',
                children: null
              }
            ]
          },
          {
            id: 856,
            parentId: 851,
            text: '3DES加密可用',
            uuid: 'd02139cf-a62d-446e-aba5-4bc0e00f3d7e',
            children: [
              {
                id: 857,
                parentId: 856,
                text: 'AES',
                uuid: '6f74fcad-6088-49fe-b4f3-69b753f6a0d7',
                children: [
                  {
                    id: 858,
                    parentId: 857,
                    text: 'Java AES',
                    uuid: '59960f8b-c91a-4fd1-a7f2-fb96791e66ff',
                    children: null
                  },
                  {
                    id: 859,
                    parentId: 857,
                    text: 'Python AES（使用pycrypto）',
                    uuid: 'b5c96667-1977-437e-84ce-e26b1e342acd',
                    children: null
                  }
                ]
              },
              {
                id: 860,
                parentId: 856,
                text: 'RSA',
                uuid: '480c5fe0-2675-4e48-9bf1-e636d31d1f6d',
                children: null
              }
            ]
          }
        ]
      },
      {
        id: 861,
        parentId: 1,
        text: '公钥私钥证书',
        uuid: '59eb5511-2a68-4875-80c3-a639ef225242',
        children: [
          {
            id: 862,
            parentId: 861,
            text: 'Keystore/Truststore区别',
            uuid: 'd12ddd8e-1419-4654-b542-42564de0ac02',
            children: null
          },
          {
            id: 863,
            parentId: 861,
            text: '使用openssl生成证书',
            uuid: 'fd5f1a5c-c2b5-4f43-97c3-654319e58d98',
            children: null
          },
          {
            id: 864,
            parentId: 861,
            text: 'Tomcat中使用客户端验证',
            uuid: '67fbc69d-ead9-48ac-aea0-c711c28f6945',
            children: null
          },
          {
            id: 865,
            parentId: 861,
            text: '使用curl访问https服务',
            uuid: '097d878d-3ad2-453e-8cbd-ef5a44b009cf',
            children: null
          },
          {
            id: 866,
            parentId: 861,
            text: '使用python作为https客户端',
            uuid: '6548e910-977b-421c-8f9e-8ca819e5a48d',
            children: null
          },
          {
            id: 867,
            parentId: 861,
            text: '使用java RestTemplate作为https客户端',
            uuid: 'c2259fbc-1810-468a-b294-d819bcfd7edc',
            children: null
          },
          {
            id: 1188,
            parentId: 861,
            text: 'Django SSO登录验证例子',
            uuid: '13a422da-4b86-41d2-a79d-bbe3d527ac37',
            children: null
          },
          {
            id: 1195,
            parentId: 861,
            text: 'springboot server with security例子',
            uuid: '5cd76a9b-917f-41e4-bdb3-8fbf197f3bf2',
            children: null
          }
        ]
      },
      {
        id: 868,
        parentId: 1,
        text: '文法翻译机',
        uuid: '9c8ecb70-406c-46c7-859d-35e761a36c9b',
        children: [
          {
            id: 869,
            parentId: 868,
            text: 'Text Notes结构',
            uuid: '266185a0-ba4f-45be-95af-468a19a75ffa',
            children: null
          },
          {
            id: 870,
            parentId: 868,
            text: 'Python条件翻译',
            uuid: '2b363697-0b51-49a7-b251-6134a1e463e0',
            children: null
          }
        ]
      },
      {
        id: 871,
        parentId: 1,
        text: 'Bootstrap',
        uuid: '247cd478-1275-41f3-a807-0f1b0707df8e',
        children: [
          {
            id: 872,
            parentId: 871,
            text: 'Basic',
            uuid: '1dc9624a-0797-482d-b117-68c79648096d',
            children: null
          },
          {
            id: 873,
            parentId: 871,
            text: 'Form',
            uuid: 'a9a2d948-1728-4d23-bd18-6ff3bc87a154',
            children: null
          },
          {
            id: 874,
            parentId: 871,
            text: 'Form controller text, radio, checkbox',
            uuid: 'b9af3561-e562-4e48-b000-f255d9751433',
            children: null
          },
          {
            id: 875,
            parentId: 871,
            text: '按钮',
            uuid: '484de78e-4844-455f-9cf6-331b5988f0d7',
            children: null
          },
          {
            id: 876,
            parentId: 871,
            text: '下拉框',
            uuid: '0f80427c-da7a-47c0-b985-0a2c605c82eb',
            children: null
          },
          {
            id: 877,
            parentId: 871,
            text: '按钮组',
            uuid: '0e397abf-07ea-41f4-b31c-dfecdb8e762d',
            children: null
          },
          {
            id: 878,
            parentId: 871,
            text: '输入框组件',
            uuid: '388fe9d3-2f94-45aa-91fd-67969d532cd8',
            children: null
          },
          {
            id: 879,
            parentId: 871,
            text: '导航',
            uuid: '7876c9d6-d311-4c9d-8ac1-6ef13606a4eb',
            children: null
          },
          {
            id: 880,
            parentId: 871,
            text: '媒体',
            uuid: '2e3f6b94-b471-4fa0-9854-d769ffa055f0',
            children: null
          },
          {
            id: 881,
            parentId: 871,
            text: '面板',
            uuid: '81836fd5-5b23-403c-aae3-8cc4b3a4696c',
            children: null
          },
          {
            id: 882,
            parentId: 871,
            text: '响应式',
            uuid: '71a0a233-a627-4dfe-87f9-ff99de3e6076',
            children: null
          },
          {
            id: 883,
            parentId: 871,
            text: '分页',
            uuid: 'b42c3340-3703-4163-8412-f5e53ad33746',
            children: null
          },
          {
            id: 884,
            parentId: 871,
            text: '徽章 / 巨幕',
            uuid: 'b86cf45e-ded4-4926-aa69-396f8144b0c5',
            children: null
          },
          {
            id: 885,
            parentId: 871,
            text: '警告框 / 进度条',
            uuid: 'c2092d5e-ea94-4cfa-9cc9-0fff2409ab24',
            children: null
          },
          {
            id: 886,
            parentId: 871,
            text: '模态框',
            uuid: '4b007d28-1718-4728-8788-902dbd02e7ad',
            children: null
          },
          {
            id: 887,
            parentId: 871,
            text: '轮播',
            uuid: 'dbdb9c49-095f-4873-877a-47a585accfd9',
            children: null
          },
          {
            id: 888,
            parentId: 871,
            text: 'eCharts图表在bootstrap tab标签不显示问题',
            uuid: 'a0705ca3-b26e-449f-a52e-1620599e955e',
            children: null
          }
        ]
      },
      {
        id: 889,
        parentId: 1,
        text: 'eCharts',
        uuid: 'c54b55ef-1d96-47d5-87be-9fac83596f2f',
        children: null
      },
      {
        id: 890,
        parentId: 1,
        text: 'Nginx',
        uuid: '22b44074-5e00-4e55-941c-772ce8e224c2',
        children: [
          {
            id: 891,
            parentId: 890,
            text: '安装',
            uuid: '9dec34df-94b4-4e4a-8daa-2d46383e2291',
            children: null
          },
          {
            id: 892,
            parentId: 890,
            text: '配置',
            uuid: '0c376cc7-0708-43cb-a9ad-af6a065f91b5',
            children: [
              {
                id: 893,
                parentId: 892,
                text: '文件nginx.conf',
                uuid: '5efb6b2c-17c5-4cbd-8536-686a113903f2',
                children: null
              },
              {
                id: 894,
                parentId: 892,
                text: '配置模板',
                uuid: '4fe2bbf7-2d14-4d6a-9fa1-f48ff336bbb7',
                children: null
              },
              {
                id: 895,
                parentId: 892,
                text: '虚拟机配置',
                uuid: 'b8ae4241-1bbe-4091-930e-1f6027f62983',
                children: null
              },
              {
                id: 896,
                parentId: 892,
                text: '缓存配置',
                uuid: '70a52ee1-b0e1-4931-adab-a0a0d9e04c48',
                children: null
              },
              {
                id: 897,
                parentId: 892,
                text: '自动列目录',
                uuid: '8d9c8815-2352-48f3-823f-d9eff6c479a8',
                children: null
              },
              {
                id: 898,
                parentId: 892,
                text: '使用basic auth身份验证',
                uuid: '6ccaccd1-a476-480e-95eb-f1d62b28a8cd',
                children: null
              }
            ]
          },
          {
            id: 899,
            parentId: 890,
            text: '反向代理，映射',
            uuid: '0466480e-e49f-41ca-93d9-2c7cf127fe34',
            children: null
          },
          {
            id: 900,
            parentId: 890,
            text: 'Django相关配置',
            uuid: '0c5e5d50-b0f1-4634-bcd1-f5ac332f5c39',
            children: null
          },
          {
            id: 901,
            parentId: 890,
            text: '配置node，django',
            uuid: '3dc8eb35-d963-46fa-a9d7-6ef84a2376e9',
            children: null
          },
          {
            id: 902,
            parentId: 890,
            text: '配置ssl（https）',
            uuid: 'c83d9a45-a3f1-4285-8529-af40c0f560b0',
            children: null
          }
        ]
      },
      {
        id: 903,
        parentId: 1,
        text: 'uwsgi',
        uuid: '4e060308-828b-41ec-af03-db5607666d7b',
        children: null
      },
      {
        id: 904,
        parentId: 1,
        text: 'Samba',
        uuid: '65a28003-3ebd-43ad-a11c-2d941d8c7e9a',
        children: null
      },
      {
        id: 905,
        parentId: 1,
        text: 'Raspberry pi',
        uuid: '7313abdb-2f53-46aa-8e6c-5ce9ecec0ac0',
        children: [
          {
            id: 1149,
            parentId: 905,
            text: 'xrdp远程桌面',
            uuid: 'dc96c5da-cce1-48cf-b755-3fa1d6df05d2',
            children: null
          },
          {
            id: 906,
            parentId: 905,
            text: 'Raspberry摄像头',
            uuid: 'd7d2a03e-5350-450f-a5e7-977a9c6a21f9',
            children: null
          },
          {
            id: 907,
            parentId: 905,
            text: 'Mosquitto',
            uuid: 'a11d5547-3309-43d1-9864-70c755068019',
            children: null
          },
          {
            id: 908,
            parentId: 905,
            text: 'DNS server',
            uuid: '5ce88cc3-2738-4737-bab9-95709fe8174b',
            children: null
          },
          {
            id: 1140,
            parentId: 905,
            text: '控制步进电机',
            uuid: '00856e5c-e9d2-48da-b557-f432cc6217cd',
            children: null
          }
        ]
      },
      {
        id: 909,
        parentId: 1,
        text: 'Docker',
        uuid: 'e8818c61-803f-45a1-bbe9-f49c5c6fdd41',
        children: [
          {
            id: 910,
            parentId: 909,
            text: 'docker私有仓库',
            uuid: 'ce3cb7d5-a5a9-4848-be96-09f04ea7884d',
            children: [
              {
                id: 911,
                parentId: 910,
                text: '与宿主nginx结合',
                uuid: 'e4a1619f-118a-45b4-a0e8-7194e078be16',
                children: null
              }
            ]
          },
          {
            id: 912,
            parentId: 909,
            text: '开启Tcp docker端口',
            uuid: '5f62b84d-42f2-45e3-8060-bc38eb9219a4',
            children: null
          },
          {
            id: 913,
            parentId: 909,
            text: '在docker中使用docker',
            uuid: 'bdfba616-5bbd-4a20-a6d7-9c2df49e98d8',
            children: null
          },
          {
            id: 914,
            parentId: 909,
            text: 'Docker compose',
            uuid: 'd07cf498-cc97-40d1-92c6-db87b42adcfd',
            children: null
          },
          {
            id: 915,
            parentId: 909,
            text: 'Docker清理',
            uuid: '660e6209-1a2a-4297-8314-e4ad86528926',
            children: null
          },
          {
            id: 1162,
            parentId: 909,
            text: '网络',
            uuid: '18b6c8e6-8ee0-4648-967a-60126904f7c3',
            children: null
          },
          {
            id: 916,
            parentId: 909,
            text: 'storage driver devicemapper',
            uuid: 'db280eb2-7602-436e-b806-3a6c9700900b',
            children: [
              {
                id: 917,
                parentId: 916,
                text: 'Ubuntu',
                uuid: 'a47f5f94-f92f-41ac-afd7-81bb19b9e168',
                children: null
              },
              {
                id: 918,
                parentId: 916,
                text: 'CentOS',
                uuid: 'da64122f-59b3-4aac-8e2a-12bf8c11d68a',
                children: null
              }
            ]
          },
          {
            id: 919,
            parentId: 909,
            text: 'Jenkins docker',
            uuid: 'dc2aff5c-0fd8-4ce4-9046-b08dccf2e0e6',
            children: null
          },
          {
            id: 920,
            parentId: 909,
            text: 'mysql docker',
            uuid: '80073509-4dc0-451d-8af0-8b86f445103b',
            children: null
          },
          {
            id: 921,
            parentId: 909,
            text: 'postgres docker',
            uuid: '548034bc-0f4f-4e70-8af5-4d07147bfe4f',
            children: null
          },
          {
            id: 922,
            parentId: 909,
            text: 'gitlab docker',
            uuid: 'f5e63a9e-3b29-46c3-b92a-d103c480c4fc',
            children: null
          },
          {
            id: 923,
            parentId: 909,
            text: 'jFrog artifactory docker',
            uuid: '63225a70-d99c-4141-a346-83f7ddc9854a',
            children: null
          },
          {
            id: 924,
            parentId: 909,
            text: 'hue docker',
            uuid: '0954a729-80e9-497f-a048-d54fdbb70f45',
            children: null
          },
          {
            id: 925,
            parentId: 909,
            text: 'spark job server docker',
            uuid: '9ab818d5-e04f-4a8d-85cc-7f433186b0c8',
            children: null
          },
          {
            id: 926,
            parentId: 909,
            text: 'docker djang项目',
            uuid: '73da7d00-bfda-4d03-9a9d-058953174b5b',
            children: [
              {
                id: 1164,
                parentId: 926,
                text: '使用alpine镜像',
                uuid: '3da532e4-94d3-4b2c-b0a7-a459b0dfbf17',
                children: null
              }
            ]
          },
          {
            id: 927,
            parentId: 909,
            text: 'ADD COPY区别',
            uuid: '2d7eaa9b-ad1f-443a-9f9c-ab172e1e9388',
            children: null
          },
          {
            id: 928,
            parentId: 909,
            text: 'Django build Dockerfile',
            uuid: '3581a34e-b4a0-4dfa-a1e7-4dae5cd7fdf1',
            children: null
          },
          {
            id: 929,
            parentId: 909,
            text: 'Springboot build dockerfile',
            uuid: '5288ff33-1029-46f6-8be7-55f0a9e3ed35',
            children: null
          }
        ]
      },
      {
        id: 930,
        parentId: 1,
        text: 'SAPUI5',
        uuid: '47c1bfc5-45e1-4652-9f99-6d287c1b6419',
        children: [
          {
            id: 931,
            parentId: 930,
            text: 'Basic',
            uuid: '94464331-b691-469e-ab4d-e49a6840f2f4',
            children: null
          },
          {
            id: 932,
            parentId: 930,
            text: '控件',
            uuid: '6fd63455-b5b4-416f-a30c-230d02161a94',
            children: [
              {
                id: 933,
                parentId: 932,
                text: 'Text',
                uuid: '16827f49-9465-4935-8c34-cbaad5aae535',
                children: null
              },
              {
                id: 934,
                parentId: 932,
                text: 'List',
                uuid: 'faca996e-d599-479f-a835-3e34223e6dc1',
                children: [
                  {
                    id: 935,
                    parentId: 934,
                    text: 'bindElement on List',
                    uuid: '0a131cfa-c2ca-4220-8563-af56d93e4c0b',
                    children: null
                  }
                ]
              },
              {
                id: 936,
                parentId: 932,
                text: 'Table',
                uuid: '01bf28f7-0458-4ebe-b4cc-2855509ea9a2',
                children: null
              },
              {
                id: 937,
                parentId: 932,
                text: 'Link',
                uuid: 'a60143e9-fddc-47f1-a7ff-58292fd91c82',
                children: null
              },
              {
                id: 938,
                parentId: 932,
                text: 'Button',
                uuid: '4ab90d45-ac3b-4c98-bf43-2d98ffddec0f',
                children: null
              },
              {
                id: 939,
                parentId: 932,
                text: 'Page',
                uuid: '47b423ee-60b7-407c-8bb2-6b1ec1f55570',
                children: null
              },
              {
                id: 940,
                parentId: 932,
                text: 'HorizontalLayout/VerticalLayout',
                uuid: 'b107172c-4b94-4e05-8ee4-40347a8cef09',
                children: null
              },
              {
                id: 941,
                parentId: 932,
                text: 'HorizontalDivider',
                uuid: '71d4c8f5-a17c-41c1-99ce-93c15f3e6e76',
                children: null
              }
            ]
          },
          {
            id: 942,
            parentId: 930,
            text: 'Index.html',
            uuid: 'b4389635-fa1c-4ad8-9499-20287799dbc9',
            children: null
          },
          {
            id: 943,
            parentId: 930,
            text: 'XML view',
            uuid: '9b65e1be-a82f-4184-9482-c170e3ec348e',
            children: [
              {
                id: 944,
                parentId: 943,
                text: 'Dialog Fragment',
                uuid: 'a1441d44-71a5-43cf-b162-a9c180bddf76',
                children: null
              },
              {
                id: 945,
                parentId: 943,
                text: '聚合数据',
                uuid: '75a3fc72-217c-4302-a2ba-a5ae9b4a4796',
                children: null
              },
              {
                id: 946,
                parentId: 943,
                text: '格式化数据',
                uuid: 'eacc1308-5bcf-41dd-9b56-ffd8957be174',
                children: null
              },
              {
                id: 947,
                parentId: 943,
                text: 'Icon',
                uuid: '766d99aa-cb37-4a81-8207-8402abf590ec',
                children: null
              }
            ]
          },
          {
            id: 948,
            parentId: 930,
            text: 'Controller',
            uuid: 'b9dd1f1f-705b-47d9-bf64-92a55a27a16f',
            children: null
          },
          {
            id: 949,
            parentId: 930,
            text: 'Model',
            uuid: '35ee0b6d-fd91-4a72-b4bf-6c4b9b66a641',
            children: null
          },
          {
            id: 950,
            parentId: 930,
            text: '国际化',
            uuid: 'e1b2f445-6c4b-42d1-85dd-3151c2cce3f0',
            children: null
          },
          {
            id: 951,
            parentId: 930,
            text: 'Component',
            uuid: '3718de33-1322-4dfc-9641-bd8f3d1ad9b3',
            children: null
          },
          {
            id: 952,
            parentId: 930,
            text: 'Manifest.json',
            uuid: 'bdb4d787-583a-4d39-96ff-2571d9988cde',
            children: [
              {
                id: 953,
                parentId: 952,
                text: '数据来源',
                uuid: 'b5860c50-7caa-4e35-9f45-cef76062c01e',
                children: null
              }
            ]
          },
          {
            id: 954,
            parentId: 930,
            text: '自定义css',
            uuid: '8ed12bcb-8d95-427d-a46c-2ab187fcf071',
            children: null
          },
          {
            id: 955,
            parentId: 930,
            text: 'Mock server',
            uuid: '46ffc455-e48f-4f67-904f-d63c166660e8',
            children: null
          },
          {
            id: 956,
            parentId: 930,
            text: 'QUnit单元测试',
            uuid: '194ae9a9-15e4-47c2-acfb-8e39d6fa9d16',
            children: null
          },
          {
            id: 957,
            parentId: 930,
            text: 'Integration test',
            uuid: '3c55f30d-80b5-489a-8f35-440548f9070a',
            children: null
          },
          {
            id: 958,
            parentId: 930,
            text: 'Debug',
            uuid: '16bc6b33-4705-4360-b38b-4e1d6cb8456b',
            children: null
          },
          {
            id: 959,
            parentId: 930,
            text: '多页面浏览',
            uuid: '6917432f-99d4-48ff-8444-0bbf3a1b2523',
            children: [
              {
                id: 960,
                parentId: 959,
                text: '带参数跳转',
                uuid: 'b9832362-93aa-4cf0-9000-bb55511887e3',
                children: null
              },
              {
                id: 961,
                parentId: 959,
                text: '带back和历史记录的跳转',
                uuid: '2a5b6a63-bc7c-4255-8eee-6a4b4c907bea',
                children: null
              },
              {
                id: 962,
                parentId: 959,
                text: '获取url上其他参数',
                uuid: '722fc709-1140-4c1b-b8d7-557bab2ecc6b',
                children: null
              },
              {
                id: 963,
                parentId: 959,
                text: 'Router配置',
                uuid: 'f8e025e8-6b97-4013-8599-4f4e451ef58f',
                children: null
              },
              {
                id: 964,
                parentId: 959,
                text: '延迟加载',
                uuid: '07213a4b-33e6-4419-a6bb-8a5a3c800b25',
                children: null
              },
              {
                id: 965,
                parentId: 959,
                text: '多个targets',
                uuid: '5f9d3f66-0222-4bab-95a8-50d8def5acbe',
                children: null
              }
            ]
          },
          {
            id: 966,
            parentId: 930,
            text: 'Model/Binding/Element binding etc',
            uuid: 'd2fbc299-41b7-416e-80b2-6cff9125b274',
            children: [
              {
                id: 967,
                parentId: 966,
                text: '对绑定对象的自定义处理方法',
                uuid: '8db92ac6-85fb-45a2-835a-87d874fd52ac',
                children: null
              },
              {
                id: 968,
                parentId: 966,
                text: '表达式binding',
                uuid: '776454d8-1af8-4b1c-8bf8-2a9ee9a64f36',
                children: null
              },
              {
                id: 969,
                parentId: 966,
                text: '绑定多值',
                uuid: '0a3485a5-1f99-4133-acec-fa4a16201e33',
                children: null
              }
            ]
          },
          {
            id: 970,
            parentId: 930,
            text: '自定义控件',
            uuid: '8fe41242-0c02-4ab8-9176-c4faf7d644b2',
            children: null
          },
          {
            id: 971,
            parentId: 930,
            text: '设备相关',
            uuid: '6483cfff-5d54-4c21-a31a-0a37deb2582e',
            children: [
              {
                id: 972,
                parentId: 971,
                text: '显示密度',
                uuid: '584f1e71-34ee-42fc-8730-6acfc9502c8c',
                children: null
              }
            ]
          },
          {
            id: 973,
            parentId: 930,
            text: '数据绑定及格式化',
            uuid: '1b7ab538-29bd-41f4-bb81-ae85a7761caa',
            children: [
              {
                id: 974,
                parentId: 973,
                text: '资源model，如翻译文件',
                uuid: '5b02a1ba-331b-4af5-bfa8-eb34cf2c3d1e',
                children: null
              },
              {
                id: 975,
                parentId: 973,
                text: '格式化',
                uuid: 'ef296783-e381-4c9b-92ae-ef654a2f5ea7',
                children: [
                  {
                    id: 976,
                    parentId: 975,
                    text: 'DateFormat',
                    uuid: '8668dcf7-41cd-4e57-aa9d-c83a29e20041',
                    children: null
                  },
                  {
                    id: 977,
                    parentId: 975,
                    text: 'NumberFormat',
                    uuid: '6db3b370-b231-415a-b2d9-8577ec50df7a',
                    children: null
                  },
                  {
                    id: 978,
                    parentId: 975,
                    text: '带类型格式化',
                    uuid: '6074cd2c-7f29-4151-8a9c-7e6dc50c02f2',
                    children: null
                  },
                  {
                    id: 979,
                    parentId: 975,
                    text: '自定义类型',
                    uuid: '7bdde994-edde-4771-8a32-051740c029aa',
                    children: null
                  },
                  {
                    id: 980,
                    parentId: 975,
                    text: '货币的格式化',
                    uuid: '0c5ee9fa-df02-4ec5-8fd6-9ddf95059ab6',
                    children: null
                  },
                  {
                    id: 981,
                    parentId: 975,
                    text: '格式化，绑定后验证',
                    uuid: '0760f715-3c1c-4eef-a302-7b182d79611b',
                    children: null
                  }
                ]
              },
              {
                id: 982,
                parentId: 973,
                text: 'OData数据类型对应SAPUI5',
                uuid: '9f6df2be-3e8a-4b0f-a925-de9feec2c079',
                children: null
              },
              {
                id: 983,
                parentId: 973,
                text: 'OData绑定',
                uuid: '8308e05c-46c3-4fcc-95a9-383d6e10b9f3',
                children: null
              }
            ]
          }
        ]
      },
      {
        id: 984,
        parentId: 1,
        text: 'SAP XScript',
        uuid: 'b6493d42-83c8-4917-b7e3-03bed693a0b1',
        children: [
          {
            id: 985,
            parentId: 984,
            text: 'Server',
            uuid: '345a9871-58f7-47c0-a741-79fde88f26fe',
            children: null
          }
        ]
      },
      {
        id: 986,
        parentId: 1,
        text: '集体智慧',
        uuid: '8f1046ff-11d1-402e-88cd-2dc077a0e440',
        children: [
          {
            id: 987,
            parentId: 986,
            text: '相似函数',
            uuid: '88e743e2-18d4-4ec1-b6e1-5a376587812b',
            children: null
          },
          {
            id: 988,
            parentId: 986,
            text: '聚合数据，群组',
            uuid: '4b4b7a9a-cff7-476d-be04-cebabc0e2dc3',
            children: null
          },
          {
            id: 989,
            parentId: 986,
            text: '搜索排名',
            uuid: '72d11d05-2a1c-4001-92f6-8d2ede875d97',
            children: null
          },
          {
            id: 990,
            parentId: 986,
            text: '多层感知机 （multilayer perceptron, MLP）网络',
            uuid: '414e5717-8a1d-4daf-a08d-2765d88e860c',
            children: null
          }
        ]
      },
      {
        id: 991,
        parentId: 1,
        text: '机器学习',
        uuid: '95d23dd2-61a1-48c5-9e7e-79f92b12add7',
        children: [
          {
            id: 1066,
            parentId: 991,
            text: '高数基础',
            uuid: '7695f43e-950e-4194-8731-67b11ab3c524',
            children: [
              {
                id: 1067,
                parentId: 1066,
                text: '线性代数',
                uuid: 'c9cb2a75-0d74-43e6-9a1f-381ff8801f62',
                children: null
              }
            ]
          },
          {
            id: 1039,
            parentId: 991,
            text: '算法',
            uuid: '0202ef03-d1e6-472f-b0a9-5156fdf91633',
            children: [
              {
                id: 1040,
                parentId: 1039,
                text: '梯度下降算法',
                uuid: '27f6dd89-9130-4b21-bd1f-e57e8e430b7c',
                children: null
              },
              {
                id: 1041,
                parentId: 1039,
                text: '牛顿法',
                uuid: 'cc83837a-9ab5-4550-bdcd-e9c1f0b6546e',
                children: null
              }
            ]
          },
          {
            id: 1042,
            parentId: 991,
            text: '模型评估',
            uuid: '6b4859a0-d42d-4a42-a020-637794fbc0b8',
            children: null
          },
          {
            id: 1046,
            parentId: 991,
            text: '线性回归',
            uuid: '4ec78325-997c-4574-b0b7-d92e94ad8534',
            children: null
          },
          {
            id: 1047,
            parentId: 991,
            text: '朴素贝叶斯',
            uuid: 'a9b91543-4e6c-4d78-84c2-8d754e301549',
            children: null
          },
          {
            id: 1063,
            parentId: 991,
            text: '邻近算法',
            uuid: '67f6a9ef-0880-45c3-ba21-c8b08f521af8',
            children: null
          },
          {
            id: 1048,
            parentId: 991,
            text: 'k邻近KNN',
            uuid: '1a48011a-acbb-4060-bc6e-57b3d6121d1c',
            children: null
          },
          {
            id: 1049,
            parentId: 991,
            text: '决策树',
            uuid: 'cf96ce9a-9b79-4ef1-bc9d-70820bc25c91',
            children: null
          },
          {
            id: 1050,
            parentId: 991,
            text: 'Logistic回归',
            uuid: '03eb39ec-0215-4bfd-9775-215e3cc220da',
            children: null
          },
          {
            id: 1051,
            parentId: 991,
            text: '支持向量机SVM',
            uuid: '3e812714-e126-4b48-9bdb-564833f43870',
            children: null
          },
          {
            id: 1052,
            parentId: 991,
            text: '随机森林',
            uuid: 'f3618d87-1314-4055-b2fb-e402e4d90e4a',
            children: [
              {
                id: 1053,
                parentId: 1052,
                text: '提升树',
                uuid: '7038246e-268e-4df7-a22c-02023ad0e6bd',
                children: null
              },
              {
                id: 1054,
                parentId: 1052,
                text: '梯度提升树GBDT',
                uuid: 'e9fe59c9-b68a-4d5e-b445-c0c56ffb2cef',
                children: null
              },
              {
                id: 1056,
                parentId: 1052,
                text: 'XGBoost',
                uuid: 'd89eb0af-f00c-410f-a40a-4add8d2a5ccc',
                children: null
              }
            ]
          },
          {
            id: 1055,
            parentId: 991,
            text: '聚类',
            uuid: '0146e533-b852-45cd-8b11-c81452ddfce6',
            children: null
          },
          {
            id: 1059,
            parentId: 991,
            text: '高斯过程',
            uuid: '458f41ee-fa3c-468c-af73-85de1f49e5dd',
            children: null
          },
          {
            id: 1064,
            parentId: 991,
            text: '高斯混合聚类',
            uuid: 'c511bbd4-01cd-43bc-b317-aa34cc6f0783',
            children: null
          },
          {
            id: 1060,
            parentId: 991,
            text: '深度学习',
            uuid: '04e223df-bba0-4001-ab71-683e3d540fa4',
            children: [
              {
                id: 1062,
                parentId: 1060,
                text: '神经网络',
                uuid: '9b6f46d3-e243-41fe-8d9c-723ea5abd259',
                children: null
              },
              {
                id: 1061,
                parentId: 1060,
                text: '卷积神经网络CNN',
                uuid: 'd02f0e84-4d02-4109-aaba-879f4e200478',
                children: null
              }
            ]
          }
        ]
      },
      {
        id: 992,
        parentId: 1,
        text: 'OAuth',
        uuid: '645d7618-d23f-4d2d-a6b9-a3cfe6c5fcb8',
        children: [
          {
            id: 1167,
            parentId: 992,
            text: 'SSO流程',
            uuid: '896e420f-481f-43b6-990d-a03400df4964',
            children: null
          }
        ]
      },
      {
        id: 993,
        parentId: 1,
        text: '支付宝支付',
        uuid: '9d8d1c0e-f1e5-49ad-9b4c-78bbb1428042',
        children: [
          {
            id: 994,
            parentId: 993,
            text: 'Android',
            uuid: '9eaed331-c3f4-4921-a217-f311d712c7f9',
            children: null
          }
        ]
      },
      {
        id: 995,
        parentId: 1,
        text: '微信开发',
        uuid: '8840197e-d75c-4078-85da-a087a81896bd',
        children: [
          {
            id: 996,
            parentId: 995,
            text: '微信接口配置',
            uuid: '8d1b2f06-4c4d-4ce8-8383-6c1efd8ad7cb',
            children: null
          },
          {
            id: 997,
            parentId: 995,
            text: '微信支付',
            uuid: '1bad8207-a030-4d03-9343-6aa66ebee2e2',
            children: null
          },
          {
            id: 998,
            parentId: 995,
            text: '微信公众号access token',
            uuid: '85bf2393-9234-4e5d-a907-3478fbc1b4f6',
            children: null
          },
          {
            id: 999,
            parentId: 995,
            text: '微信公众号平台后端（python）',
            uuid: '6c4ccbd1-e10d-4dfa-9435-212b5962cf56',
            children: null
          },
          {
            id: 1000,
            parentId: 995,
            text: '微信开放平台授权',
            uuid: '7f36e67d-4dc8-41a0-a6ce-bd3088c00fc4',
            children: null
          },
          {
            id: 1001,
            parentId: 995,
            text: '微信JS-SDK',
            uuid: '293d7c78-ca62-4f76-81a6-70b86fb5f804',
            children: null
          },
          {
            id: 1002,
            parentId: 995,
            text: '微信小程序',
            uuid: '6c4622da-9480-4ec8-919e-8520eaaa9526',
            children: null
          },
          {
            id: 1003,
            parentId: 995,
            text: '微博OAuth授权登录',
            uuid: 'd4356a66-e96f-4fcc-ab9e-84a46ac543f2',
            children: null
          }
        ]
      },
      {
        id: 1004,
        parentId: 1,
        text: '汇率转换',
        uuid: '899e6d0a-5308-4097-bec3-f6d2e7ee60b6',
        children: null
      },
      {
        id: 1005,
        parentId: 1,
        text: '供应链金融及一些金融知识',
        uuid: '695a3874-841c-4ac6-8da1-95e4d540257e',
        children: null
      },
      {
        id: 1006,
        parentId: 1,
        text: 'Effective Java',
        uuid: '14f510be-c663-4431-9e8b-9947eeb9d3f6',
        children: [
          {
            id: 1007,
            parentId: 1006,
            text: '创建销毁对象',
            uuid: '7709ac6b-c2cf-4c24-be2c-7f233bc80d72',
            children: [
              {
                id: 1008,
                parentId: 1007,
                text: '使用静态方法创建对象',
                uuid: 'a6f2e431-817c-451d-a237-e7c46a206de5',
                children: null
              },
              {
                id: 1009,
                parentId: 1007,
                text: '使用Builder模式创建参数较多的对象',
                uuid: '7368c159-e378-44f6-892f-d0aaa5ccdb15',
                children: null
              },
              {
                id: 1010,
                parentId: 1007,
                text: '单例模式使用私有构造函数或者枚举类型',
                uuid: '3fb26851-f15e-4d10-8770-772e9c511951',
                children: null
              },
              {
                id: 1011,
                parentId: 1007,
                text: '使用private构造方法强制禁止实例化',
                uuid: 'fd4da69b-8193-4627-89a9-d857f6edf379',
                children: null
              },
              {
                id: 1012,
                parentId: 1007,
                text: '不要创建不必要的对象',
                uuid: '52980f15-ee85-479a-ad6e-fe590cfeff71',
                children: null
              },
              {
                id: 1013,
                parentId: 1007,
                text: '释放具体对象的引用',
                uuid: '911a0101-a1f4-499f-99b0-a04c76b08464',
                children: null
              },
              {
                id: 1014,
                parentId: 1007,
                text: '避免使用析构函数',
                uuid: '269c2b25-4bb2-41cd-9952-0e84b16f2655',
                children: null
              }
            ]
          },
          {
            id: 1015,
            parentId: 1006,
            text: '对象的通用方法',
            uuid: '42d672dc-d6c9-4f72-9ff0-c2099f46c612',
            children: [
              {
                id: 1016,
                parentId: 1015,
                text: '覆盖equals要符合原则，自反，对称，传递，一致性',
                uuid: 'a04e2695-e8ff-4fb8-9260-021e4976e467',
                children: null
              },
              {
                id: 1017,
                parentId: 1015,
                text: '覆盖equals也同时覆盖hasCode方法',
                uuid: 'cdc20bb8-be27-4b8d-a85c-daf3d8d41c67',
                children: null
              },
              {
                id: 1018,
                parentId: 1015,
                text: '覆盖toString方法',
                uuid: '70b8a564-d6ca-46d2-8b3c-ca8e30ff767b',
                children: null
              },
              {
                id: 1019,
                parentId: 1015,
                text: '明智地覆盖clone方法',
                uuid: 'b4b8208c-40da-4a68-95aa-7010d02325fa',
                children: null
              },
              {
                id: 1020,
                parentId: 1015,
                text: '实现Comparable接口',
                uuid: '593b02f7-7a9d-434f-8325-2115e5286145',
                children: null
              }
            ]
          },
          {
            id: 1021,
            parentId: 1006,
            text: '类和接口',
            uuid: '06842c5c-7a38-49ad-9add-48aa731d863d',
            children: [
              {
                id: 1022,
                parentId: 1021,
                text: '最小化对类和成员变量的访问',
                uuid: '235ca73b-3db5-431d-9583-56a7106b1c97',
                children: null
              },
              {
                id: 1023,
                parentId: 1021,
                text: '对成员变量使用访问器',
                uuid: 'dbda1be5-fce3-46f7-a5fd-47c05d829d27',
                children: null
              },
              {
                id: 1024,
                parentId: 1021,
                text: '最小化可变性',
                uuid: '49dba553-fa48-42da-aaa7-5facd071060b',
                children: null
              },
              {
                id: 1025,
                parentId: 1021,
                text: '使用组合模式优于继承',
                uuid: 'dd1bfac3-c83b-4f2c-9199-202e1a84a55f',
                children: null
              },
              {
                id: 1026,
                parentId: 1021,
                text: '一定要使用继承则需要记录详细的文档',
                uuid: '1c63728d-a650-4482-ae80-c3b7bc772e00',
                children: null
              },
              {
                id: 1027,
                parentId: 1021,
                text: '使用接口优于抽象类',
                uuid: 'b7ac44c3-42c9-4027-a33b-7906dcf07851',
                children: null
              },
              {
                id: 1028,
                parentId: 1021,
                text: '使用接口来定义类型',
                uuid: '6cdc5275-b27c-430a-82bb-001dda466a9b',
                children: null
              },
              {
                id: 1029,
                parentId: 1021,
                text: '使用类继承优于标记类',
                uuid: 'c9e5cf39-7176-41c1-9f06-7049a00f7ee4',
                children: null
              },
              {
                id: 1030,
                parentId: 1021,
                text: '使用函数回调实现策略模式',
                uuid: '50bef645-b79a-4815-9bfb-d261f8009538',
                children: null
              },
              {
                id: 1031,
                parentId: 1021,
                text: '使用静态成员类优于非静态类',
                uuid: '0c08590f-5404-4735-9f80-ccbdc70de24e',
                children: null
              }
            ]
          },
          {
            id: 1032,
            parentId: 1006,
            text: '泛型',
            uuid: 'd760af28-0cfb-4314-b506-77d7c38fef3d',
            children: [
              {
                id: 1033,
                parentId: 1032,
                text: '使用泛型而不是原始类型',
                uuid: '780a22f2-d8e8-46c4-8389-b86e97f80418',
                children: null
              },
              {
                id: 1034,
                parentId: 1032,
                text: '尽可能消除所有unchecked warnings',
                uuid: '0ffc062f-8cf6-4ec1-be3d-edb1baa6eb4d',
                children: null
              },
              {
                id: 1035,
                parentId: 1032,
                text: '使用List类型而不是数组',
                uuid: 'da377606-239a-4356-b6cd-e9612beca073',
                children: null
              },
              {
                id: 1036,
                parentId: 1032,
                text: '使用泛型',
                uuid: '7f328d42-ff07-49f0-b051-a22f0a63d830',
                children: null
              },
              {
                id: 1037,
                parentId: 1032,
                text: '使用泛型方法',
                uuid: 'b565f0cf-ba8b-46a5-8638-846517805501',
                children: null
              },
              {
                id: 1038,
                parentId: 1032,
                text: '考虑使用类型安全的多样性容器',
                uuid: '9078e90b-12b9-4b6d-b101-a6e9204eb967',
                children: null
              }
            ]
          }
        ]
      }
    ]
  }
};

const TreeCosmoDemo: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<TreeNode | null>(null);
  const [data, setData] = useState<TreeCosmoData>(sampleData);

  const handleNodeSelect = (node: TreeNode | null) => {
    setSelectedNode(node);
    console.log('Selected node:', node);
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '16px 24px',
          background: 'rgba(0, 0, 0, 0.3)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <h1 style={{ color: '#ffffff', margin: 0, fontSize: '24px' }}>
          🌌 Tree Cosmo Visualization Demo
        </h1>
        <p
          style={{
            color: 'rgba(255, 255, 255, 0.6)',
            margin: '8px 0 0 0',
            fontSize: '14px'
          }}
        >
          Interactive 3D visualization of hierarchical tree data as a cosmic
          system
        </p>
      </div>

      {/* Visualization */}
      <div style={{ flex: 1, padding: '16px' }}>
        <TreeCosmoVisualization
          data={data}
          onNodeSelect={handleNodeSelect}
          initialZoom={1}
          baseRadius={1}
          minRadius={0.3}
          maxRadius={2}
          orbitDistance={4}
          animationSpeed={1}
          showLabels={true}
        />
      </div>

      {/* Selected Node Info */}
      {selectedNode && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(0, 0, 0, 0.8)',
            padding: '12px 24px',
            borderRadius: '8px',
            color: '#ffffff',
            display: 'flex',
            gap: '24px',
            zIndex: 1000
          }}
        >
          <div>
            <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
              Selected:{' '}
            </span>
            <span style={{ fontWeight: 'bold' }}>{selectedNode.text}</span>
          </div>
          <div>
            <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>ID: </span>
            <span>{selectedNode.id}</span>
          </div>
          <div>
            <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
              Children:{' '}
            </span>
            <span>{selectedNode.children?.length || 0}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TreeCosmoDemo;
