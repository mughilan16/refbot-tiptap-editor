import React from 'react'

 const referenceElements: {
    id: number;
    index: number;
    name: string;
    color: string;
    created_at: string;
    updated_at: string;
    is_active: number;
    allow_sub_tagging: number;
}[] = [
        {
            "id": 36,
            "index": 1,
            "name": "doi",
            "color": "#287da7",
            "created_at": "2023-04-19T23:06:20.000000Z",
            "updated_at": "2024-01-17T10:32:47.000000Z",
            "is_active": 1,
            "allow_sub_tagging": 0
        },
        {
            "id": 37,
            "index": 2,
            "name": "editor",
            "color": "#37b3d2",
            "created_at": "2023-04-19T23:08:43.000000Z",
            "updated_at": "2023-04-21T12:32:48.000000Z",
            "is_active": 1,
            "allow_sub_tagging": 1
        },
        {
            "id": 26,
            "index": 2,
            "name": "etal",
            "color": "#4ccda6",
            "created_at": "2022-07-12T11:19:01.000000Z",
            "updated_at": "2023-04-25T11:03:38.000000Z",
            "is_active": 1,
            "allow_sub_tagging": 0
        },
        {
            "id": 23,
            "index": 2,
            "name": "pubid",
            "color": "#a16c92",
            "created_at": "2022-07-12T11:18:07.000000Z",
            "updated_at": "2024-01-18T12:48:56.000000Z",
            "is_active": 1,
            "allow_sub_tagging": 1
        },
        {
            "id": 1,
            "index": 2,
            "name": "author",
            "color": "#ffdb00",
            "created_at": "2022-07-07T07:47:51.000000Z",
            "updated_at": "2024-01-19T15:38:11.000000Z",
            "is_active": 1,
            "allow_sub_tagging": 1
        },
        {
            "id": 16,
            "index": 2,
            "name": "suffix",
            "color": "#932a2a",
            "created_at": "2022-07-12T11:14:36.000000Z",
            "updated_at": "2023-05-12T13:17:27.000000Z",
            "is_active": 1,
            "allow_sub_tagging": 0
        },
        {
            "id": 2,
            "index": 3,
            "name": "title",
            "color": "#337ab7",
            "created_at": "2022-07-07T07:47:51.000000Z",
            "updated_at": "2023-04-19T23:06:32.000000Z",
            "is_active": 1,
            "allow_sub_tagging": 0
        },
        {
            "id": 24,
            "index": 3,
            "name": "issn",
            "color": "#7f6b66",
            "created_at": "2022-07-12T11:18:28.000000Z",
            "updated_at": "2023-04-13T11:45:36.000000Z",
            "is_active": 1,
            "allow_sub_tagging": 0
        },
        {
            "id": 4,
            "index": 4,
            "name": "year",
            "color": "#07ab7a",
            "created_at": "2022-07-07T07:47:35.000000Z",
            "updated_at": "2022-07-12T11:13:50.000000Z",
            "is_active": 1,
            "allow_sub_tagging": 0
        },
        {
            "id": 18,
            "index": 5,
            "name": "collab",
            "color": "#a08c27",
            "created_at": "2022-07-12T11:15:37.000000Z",
            "updated_at": "2023-04-13T11:45:50.000000Z",
            "is_active": 1,
            "allow_sub_tagging": 0
        },
        {
            "id": 5,
            "index": 5,
            "name": "publisher-name",
            "color": "#00f074",
            "created_at": "2022-07-07T06:57:51.000000Z",
            "updated_at": "2023-04-19T23:07:14.000000Z",
            "is_active": 1,
            "allow_sub_tagging": 0
        },
        {
            "id": 6,
            "index": 6,
            "name": "publisher-loc",
            "color": "#337ab7",
            "created_at": "2022-07-07T07:45:32.000000Z",
            "updated_at": "2023-04-19T23:07:33.000000Z",
            "is_active": 1,
            "allow_sub_tagging": 0
        },
        {
            "id": 8,
            "index": 7,
            "name": "issue",
            "color": "#0da01e",
            "created_at": "2022-07-07T07:45:32.000000Z",
            "updated_at": "2023-04-13T11:24:23.000000Z",
            "is_active": 1,
            "allow_sub_tagging": 0
        },
        {
            "id": 7,
            "index": 7,
            "name": "volume",
            "color": "#0be5c4",
            "created_at": "2022-07-07T07:45:32.000000Z",
            "updated_at": "2022-07-12T11:12:43.000000Z",
            "is_active": 1,
            "allow_sub_tagging": 0
        },
        {
            "id": 9,
            "index": 8,
            "name": "edition",
            "color": "#a615f4",
            "created_at": "2022-07-07T07:45:32.000000Z",
            "updated_at": "2023-04-19T23:08:17.000000Z",
            "is_active": 1,
            "allow_sub_tagging": 0
        },
        {
            "id": 10,
            "index": 10,
            "name": "translator",
            "color": "#98ec9d",
            "created_at": "2022-07-07T07:45:32.000000Z",
            "updated_at": "2023-04-21T12:33:05.000000Z",
            "is_active": 1,
            "allow_sub_tagging": 1
        },
        {
            "id": 43,
            "index": 10,
            "name": "surname",
            "color": "#2fb41d",
            "created_at": "2023-04-25T06:58:00.000000Z",
            "updated_at": "2023-04-25T06:58:00.000000Z",
            "is_active": 1,
            "allow_sub_tagging": 0
        },
        {
            "id": 41,
            "index": 10,
            "name": "firstname",
            "color": "#2ae5ad",
            "created_at": "2023-04-21T13:24:06.000000Z",
            "updated_at": "2023-04-21T13:24:06.000000Z",
            "is_active": 1,
            "allow_sub_tagging": 0
        },
        {
            "id": 42,
            "index": 10,
            "name": "given",
            "color": "#735ace",
            "created_at": "2023-04-25T06:46:39.000000Z",
            "updated_at": "2023-04-25T06:46:39.000000Z",
            "is_active": 1,
            "allow_sub_tagging": 0
        },
        {
            "id": 11,
            "index": 11,
            "name": "source",
            "color": "#795548",
            "created_at": "2022-07-07T07:45:32.000000Z",
            "updated_at": "2022-07-22T18:30:24.000000Z",
            "is_active": 1,
            "allow_sub_tagging": 0
        },
        {
            "id": 14,
            "index": 12,
            "name": "url",
            "color": "#11e8e5",
            "created_at": "2022-07-09T11:39:58.000000Z",
            "updated_at": "2022-07-12T11:12:03.000000Z",
            "is_active": 1,
            "allow_sub_tagging": 0
        },
        {
            "id": 59,
            "index": 12,
            "name": "pages",
            "color": "#c02121",
            "created_at": "2024-01-18T12:17:25.000000Z",
            "updated_at": "2024-01-18T12:17:25.000000Z",
            "is_active": 1,
            "allow_sub_tagging": 0
        },
        {
            "id": 44,
            "index": 15,
            "name": "x",
            "color": "#ed0000",
            "created_at": "2023-04-25T13:23:27.000000Z",
            "updated_at": "2024-01-17T08:14:09.000000Z",
            "is_active": 1,
            "allow_sub_tagging": 0
        },
        {
            "id": 21,
            "index": 16,
            "name": "label",
            "color": "#f5cdb2",
            "created_at": "2022-07-12T11:17:20.000000Z",
            "updated_at": "2023-04-13T11:46:53.000000Z",
            "is_active": 1,
            "allow_sub_tagging": 0
        },
        {
            "id": 19,
            "index": 17,
            "name": "month",
            "color": "#55a5a0",
            "created_at": "2022-07-12T11:15:59.000000Z",
            "updated_at": "2023-04-13T11:47:01.000000Z",
            "is_active": 1,
            "allow_sub_tagging": 0
        },
        {
            "id": 15,
            "index": 18,
            "name": "person",
            "color": "#ffea00",
            "created_at": "2022-07-11T17:59:24.000000Z",
            "updated_at": "2023-04-13T11:47:13.000000Z",
            "is_active": 1,
            "allow_sub_tagging": 0
        },
        {
            "id": 30,
            "index": 23,
            "name": "date-in-citation",
            "color": "#e89a11",
            "created_at": "2022-07-22T12:00:28.000000Z",
            "updated_at": "2023-04-13T11:25:01.000000Z",
            "is_active": 1,
            "allow_sub_tagging": 0
        },
        {
            "id": 17,
            "index": 24,
            "name": "prefix",
            "color": "#a4bcb6",
            "created_at": "2022-07-12T11:15:07.000000Z",
            "updated_at": "2022-07-12T18:39:41.000000Z",
            "is_active": 1,
            "allow_sub_tagging": 0
        },
        {
            "id": 25,
            "index": 110,
            "name": "isbn",
            "color": "#9d9390",
            "created_at": "2022-07-12T11:18:43.000000Z",
            "updated_at": "2023-04-13T11:46:44.000000Z",
            "is_active": 1,
            "allow_sub_tagging": 0
        }
    ]
export default referenceElements