import type { TNotification } from '../assets/data'
import './NotificationModal.css'

type NotificationProps = {
  notifications: TNotification[]
  markNotificationAsRead: (id: number) => void
}

function NotificationModal({ notifications, markNotificationAsRead }: NotificationProps) {
  return (
    <div className='notification-modal'>
      <section className='notification-container'>
        {notifications.map((notification) => {
          if (!notification.isRead) {
            return (
              <div className='notification-row'>
                <strong>{notification.title}</strong>
                <p>{notification.body}</p>
                <button
                  className='btn'
                  id='markAsRead'
                  onClick={() => markNotificationAsRead(notification.id)}
                >
                  Mark as read
                </button>
              </div>
            )
          }
        })}
      </section>
    </div>
  )
}
export default NotificationModal
