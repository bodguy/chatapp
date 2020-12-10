import { format } from 'date-fns'

const inboxLists = [
    {
        thumbnailPath: '/public/img/profile1.jpg',
        name: '원대로',
        dateTime: new Date().toLocaleDateString(),
        contents: '보통 둘로 나눠요 반반 하나는 윈도우 깔아두고 하나는 내 코드나 포맷해서 날리면 안되는걸 저장해둬요'
    },
    {
        thumbnailPath: '/public/img/profile2.jpg',
        name: '나영열',
        dateTime: new Date().toLocaleDateString(),
        contents: '지금 파티션 선택하는데 ntfs가 아니라서 설치할수 없다고 하는데요 혹시 파티션 삭제해도 되나요?'
    },
    {
        thumbnailPath: '/public/img/profile3.jpeg',
        name: '유영준',
        dateTime: new Date().toLocaleDateString(),
        contents: '이거 폰으로 요청하려고 했는데 양식이 있어서 리뷰 끝나고 해드릴께요 ㅠ'
    },
    {
        thumbnailPath: '/public/img/profile4.jpg',
        name: '구미향',
        dateTime: new Date().toLocaleDateString(),
        contents: '그냥 수정모드 한상태로는 페이지 이동 못하게 하거나'
    },
    {
        thumbnailPath: '/public/img/profile2.jpg',
        name: '박승권',
        dateTime: new Date().toLocaleDateString(),
        contents: '박승권 pushed to unified-search/spatial/save-polygon-data [#79529] serialize format 변경'
    },
    {
        thumbnailPath: '/public/img/profile3.jpeg',
        name: '김영기',
        dateTime: new Date().toLocaleDateString(),
        contents: 'SearchZUM LVS: 2 OFF, 1 ON 정승원, 검색줌 지식SC 검색플랫폼 전환 적용, 2셋배포'
    },
    {
        thumbnailPath: '/public/img/profile1.jpg',
        name: '정승원',
        dateTime: new Date().toLocaleDateString(),
        contents: '📢 주간업무 작성해주세요'
    },
    {
        thumbnailPath: '/public/img/profile4.jpg',
        name: '신지영',
        dateTime: new Date().toLocaleDateString(),
        contents: '안녕하세요2'
    },
    {
        thumbnailPath: '/public/img/profile3.jpeg',
        name: '유현우',
        dateTime: new Date().toLocaleDateString(),
        contents: '안녕하세요3'
    },
    {
        thumbnailPath: '/public/img/profile1.jpg',
        name: '원대로',
        dateTime: new Date().toLocaleDateString(),
        contents: '보통 둘로 나눠요 반반 하나는 윈도우 깔아두고 하나는 내 코드나 포맷해서 날리면 안되는걸 저장해둬요'
    },
    {
        thumbnailPath: '/public/img/profile2.jpg',
        name: '나영열',
        dateTime: new Date().toLocaleDateString(),
        contents: '지금 파티션 선택하는데 ntfs가 아니라서 설치할수 없다고 하는데요 혹시 파티션 삭제해도 되나요?'
    },
    {
        thumbnailPath: '/public/img/profile3.jpeg',
        name: '유영준',
        dateTime: new Date().toLocaleDateString(),
        contents: '이거 폰으로 요청하려고 했는데 양식이 있어서 리뷰 끝나고 해드릴께요 ㅠ'
    },
    {
        thumbnailPath: '/public/img/profile4.jpg',
        name: '구미향',
        dateTime: new Date().toLocaleDateString(),
        contents: '그냥 수정모드 한상태로는 페이지 이동 못하게 하거나'
    },
    {
        thumbnailPath: '/public/img/profile2.jpg',
        name: '박승권',
        dateTime: new Date().toLocaleDateString(),
        contents: '박승권 pushed to unified-search/spatial/save-polygon-data [#79529] serialize format 변경'
    },
    {
        thumbnailPath: '/public/img/profile3.jpeg',
        name: '김영기',
        dateTime: new Date().toLocaleDateString(),
        contents: 'SearchZUM LVS: 2 OFF, 1 ON 정승원, 검색줌 지식SC 검색플랫폼 전환 적용, 2셋배포'
    },
    {
        thumbnailPath: '/public/img/profile1.jpg',
        name: '정승원',
        dateTime: new Date().toLocaleDateString(),
        contents: '📢 주간업무 작성해주세요'
    },
    {
        thumbnailPath: '/public/img/profile4.jpg',
        name: '신지영',
        dateTime: new Date().toLocaleDateString(),
        contents: '안녕하세요2'
    },
    {
        thumbnailPath: '/public/img/profile3.jpeg',
        name: '유현우',
        dateTime: new Date().toLocaleDateString(),
        contents: '안녕하세요3'
    },
];

const messageContents = [
    {
        type: false,
        msg: '잘 되요?',
        dateTime: format(new Date(), 'HH:mm')
    },
    {
        type: true,
        msg: '네 그런데 파티션을 어디에 설치 해야 하나요?',
        dateTime: format(new Date(), 'HH:mm')
    },
    {
        type: false,
        msg: '보통 둘로 나눠요 반반 하나는 윈도우 깔아두고 하나는 내 코드나 포맷해서 날리면 안되는걸 저장해둬요',
        dateTime: format(new Date(), 'HH:mm')
    },
    {
        type: true,
        msg: '지금 파티션 선택하는데 ntfs가 아니라서 설치할수 없다고 하는데요 혹시 파티션 삭제해도 되나요?',
        dateTime: format(new Date(), 'HH:mm')
    },
    {
        type: false,
        msg: '넵 한번 삭제해야할거에요',
        dateTime: format(new Date(), 'HH:mm')
    },
    {
        type: false,
        msg: '그래야 파티션을 나눌 수 있을거에요',
        dateTime: format(new Date(), 'HH:mm')
    },
    {
        type: true,
        msg: '넵 감사합니다 설치하고 잇습니다 ㅎㅎ',
        dateTime: format(new Date(), 'HH:mm')
    },
    {
        type: false,
        msg: ':+1:',
        dateTime: format(new Date(), 'HH:mm')
    },
    {
        type: true,
        msg: '다된것 같습니다.',
        dateTime: format(new Date(), 'HH:mm')
    },
    {
        type: false,
        msg: '넵',
        dateTime: format(new Date(), 'HH:mm')
    },
    {
        type: false,
        msg: '이거 폰으로 요청하려고 했는데 양식이 있어서 리뷰 끝나고 해드릴께요 ㅠ',
        dateTime: format(new Date(), 'HH:mm')
    },
    {
        type: true,
        msg: '넵 알겟습니다',
        dateTime: format(new Date(), 'HH:mm')
    },
    {
        type: true,
        msg: 'For help with GitHub.com, please email support@github.com',
        dateTime: format(new Date(), 'HH:mm')
    },
    {
        type: false,
        msg: '잘 되요?',
        dateTime: format(new Date(), 'HH:mm')
    },
    {
        type: true,
        msg: '네 그런데 파티션을 어디에 설치 해야 하나요?',
        dateTime: format(new Date(), 'HH:mm')
    },
    {
        type: false,
        msg: '보통 둘로 나눠요 반반 하나는 윈도우 깔아두고 하나는 내 코드나 포맷해서 날리면 안되는걸 저장해둬요',
        dateTime: format(new Date(), 'HH:mm')
    },
    {
        type: true,
        msg: '지금 파티션 선택하는데 ntfs가 아니라서 설치할수 없다고 하는데요 혹시 파티션 삭제해도 되나요?',
        dateTime: format(new Date(), 'HH:mm')
    },
    {
        type: false,
        msg: '넵 한번 삭제해야할거에요',
        dateTime: format(new Date(), 'HH:mm')
    },
    {
        type: false,
        msg: '그래야 파티션을 나눌 수 있을거에요',
        dateTime: format(new Date(), 'HH:mm')
    },
    {
        type: true,
        msg: '넵 감사합니다 설치하고 잇습니다 ㅎㅎ',
        dateTime: format(new Date(), 'HH:mm')
    },
    {
        type: false,
        msg: ':+1:',
        dateTime: format(new Date(), 'HH:mm')
    },
    {
        type: true,
        msg: '다된것 같습니다.',
        dateTime: format(new Date(), 'HH:mm')
    },
    {
        type: false,
        msg: '넵',
        dateTime: format(new Date(), 'HH:mm')
    },
    {
        type: false,
        msg: '이거 폰으로 요청하려고 했는데 양식이 있어서 리뷰 끝나고 해드릴께요 ㅠ',
        dateTime: format(new Date(), 'HH:mm')
    },
    {
        type: true,
        msg: '넵 알겟습니다',
        dateTime: format(new Date(), 'HH:mm')
    },
    {
        type: true,
        msg: 'For help with GitHub.com, please email support@github.com',
        dateTime: format(new Date(), 'HH:mm')
    },
    {
        type: true,
        img: true,
        msg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYIRme1CKdLciLWmMawH95DTMGnMEtkSzAdA&usqp=CAU',
        dateTime: format(new Date(), 'HH:mm')
    },
    {
        type: false,
        img: true,
        msg: 'http://wowslider.com/sliders/demo-81/data1/images/redkite50498.jpg',
        dateTime: format(new Date(), 'HH:mm')
    },
    {
        type: false,
        msg: 'https://youtu.be/LGldG7EXKbE',
        dateTime: format(new Date(), 'HH:mm')
    }
];

export {
    inboxLists,
    messageContents,
}