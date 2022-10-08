import type { TNotification } from '../assets/data'

import {
  Btn,
  NotificationContainer,
  NotificationRow,
  NotificationView
} from '../components/styledComponents'

type NotificationProps = {
  notifications: TNotification[]
  markNotificationAsRead: (id: number) => void
}

function NotificationModal({ notifications, markNotificationAsRead }: NotificationProps) {
  return (
    <NotificationView>
      <NotificationContainer>
        {notifications.map((notification) => {
          if (!notification.isRead) {
            return (
              <NotificationRow key={notification.id}>
                <strong>{notification.title}</strong>
                <p>{notification.body}</p>
                <Btn
                  id='markAsRead'
                  onClick={() => markNotificationAsRead(notification.id)}
                >
                  Mark as read
                </Btn>
              </NotificationRow>
            )
          }
        })}
      </NotificationContainer>
    </NotificationView>
  )
}
export default NotificationModal
