module UsersHelper

  def lesson_time(user, lesson)
    user.lesson_completion_time(lesson).to_formatted_s(:long)
  end

  def display_dashboard_learning_goal(user)
    if user.learning_goal.blank?
      "Set a learning goal in your #{settings_link}.".html_safe
    else
      user.learning_goal
    end
  end

  def display_learning_goal(user)
    if user.learning_goal.blank?
      "No learning goal set yet."
    else
      user.learning_goal
    end
  end

  def avatar_path(avatar)
    avatar || image_path("odin-logo.svg")
  end



def lesson_completed_array(active_days)
  logged_in = active_days.map{ |day| day.created_at.to_date}
  last_year = Date.parse(Time.now.to_s) - 1.year
  today = Date.parse(Time.now.to_s)
  (last_year..today).map { |val| {day: val, completed: lesson_is_completed?(val, logged_in)} }
 end



  private

  def lesson_is_completed?(val, arr)
   arr.include?(val)
  end


  def settings_link
    link_to 'settings', edit_user_registration_path, class: 'profile-card__link'
  end
end
