import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationTriggerMetadata
} from '@angular/animations';

export const openClose: AnimationTriggerMetadata[] = [
  trigger('openClose', [
    transition('open => closed', [
      animate('1s')
    ]),
    transition('closed => open', [
      animate('0.5s')
    ]),
    state('open', style({
      height: '200px',
      opacity: 1,
      backgroundColor: 'yellow'
    })),
    state('closed', style({
      height: '100px',
      opacity: 0.5,
      backgroundColor: 'green'
    }))
  ])
];

export const titleAnimations: AnimationTriggerMetadata[] = [
    trigger('titleAnimation', [
      transition('void => title', [
        style({
          position: 'absolute',
          transform: 'translateX(125vw)',
          opacity: -0.5
        }),
        animate('300ms ease-out')
      ]),
      transition('leave => back', animate('300ms ease-out')),
      transition('back => leave', [
        animate('300ms ease-out', style({
          position: 'absolute',
          transform: 'translateX(-50vw)',
          opacity: -0.5
        })),
      ]),
      transition('title => void', [
        animate('300ms ease-out', style({
          position: 'absolute',
          transform: 'translateX(125vw)',
          opacity: -0.5
        }))
      ]),
      transition('back => title', animate('300ms ease-out')),
      transition('title => back', animate('300ms ease-out')),
      transition('static-title => back', animate('300ms ease-out')),
      transition('back => static-title', animate('300ms ease-out')),
      state('title', style({
        position: 'absolute',
        transform: 'translateX(50vw)',
        opacity: 1
      })),
      state('back', style({
        position: 'absolute',
        transform: 'translateX(calc(25px - {{offset}}px ))',
        opacity: 1,
      }), { params: { offset: 0 } }),
      state('leave', style({
        position: 'absolute',
        transform: 'translateX(calc(0vw + ({{offset}}px * 2) ))',
        opacity: -0.5,
      }), { params: { offset: 0 }}),
      state('invisible', style({
        display: 'none'
      })),
      state('static-title', style({
        position: 'absolute',
        transform: 'translateX(50vw)',
        opacity: 1,
      })),
    ])
  ];

export const enterLeave: AnimationTriggerMetadata[] = [
  trigger('fadeInOut', [
    state('void', style({
      opacity: 0
    })),
    transition('void <=> *', animate(1000)),
  ])
];

export const fadeAnimation: AnimationTriggerMetadata[] = [
  trigger('fadeAnimation', [
    transition(':enter', [
      style({
        opacity: 0
      }),
      animate('150ms ease-in', style({
        opacity: 1
      })),
    ]),
    transition(':leave', [
      style({
        opacity: 1
      }),
      animate('150ms ease-out', style({
        opacity: 0
      })),
    ]),
  ])
];
