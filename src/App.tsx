/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { PageType } from "./types";
import { Navigation } from "./components/Navigation";
import { TopAppBar } from "./components/TopAppBar";
import { Home } from "./pages/Home";
import { Analytics } from "./pages/Analytics";
import { ExamResults } from "./pages/ExamResults";
import { TutoringRecords } from "./pages/TutoringRecords";
import { Messages } from "./pages/Messages";
import { Profile } from "./pages/Profile";
import { EditProfile } from "./pages/EditProfile";
import { StudentDetails } from "./pages/StudentDetails";
import { HomeworkDetails } from "./pages/HomeworkDetails";
import { RecitationDetails } from "./pages/RecitationDetails";
import { Login } from "./pages/Login";
import { BindChild } from "./pages/BindChild";
import { AnimatePresence } from "motion/react";

import { Notifications } from "./pages/Notifications";

import { About } from "./pages/About";
import { Chat } from "./pages/Chat";
import { Announcements } from "./pages/Announcements";
import { WeeklyReports } from "./pages/WeeklyReports";
import { GroupScores } from "./pages/GroupScores";
import { ChatBottomBar } from "./components/ChatBottomBar";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("login");

  const showHeader = !["login", "bind-child"].includes(currentPage);
  const showNav = ![
    "login",
    "bind-child",
    "chat",
    "announcements",
    "weekly-reports",
    "group-scores",
  ].includes(currentPage);

  return (
    <div className="min-h-screen w-full bg-[#f0f0f0] flex items-center justify-center sm:py-8">
      <div className="flex flex-col w-full h-[100dvh] sm:h-[844px] max-w-[390px] bg-surface sm:rounded-[40px] sm:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] relative overflow-hidden sm:border-[8px] border-[#e0e0e0]">
        {showHeader && (
          <TopAppBar
            title={
              [
                "homework-details",
                "recitation-details",
                "exam-results",
                "edit-profile",
                "notifications",
                "student-details",
                "about",
                "chat",
                "announcements",
                "weekly-reports",
                "group-scores",
              ].includes(currentPage)
                ? ""
                : "EduFlow"
            }
            subtitle={
              currentPage === "exam-results"
                ? "考试成绩"
                : currentPage === "tutoring-records"
                  ? "个辅记录"
                  : currentPage === "homework-details"
                    ? "作业详情"
                    : currentPage === "recitation-details"
                      ? "背诵记录"
                      : currentPage === "edit-profile"
                        ? "账号与安全"
                        : currentPage === "notifications"
                          ? "消息通知设置"
                          : currentPage === "student-details"
                            ? "学生详情"
                            : currentPage === "chat"
                              ? "王老师 (数学)"
                              : currentPage === "about"
                                ? "关于我们"
                                : currentPage === "announcements"
                                  ? "校园公告"
                                  : currentPage === "weekly-reports"
                                    ? "学情周报"
                                    : currentPage === "group-scores"
                                      ? "小组积分"
                                      : "知流"
            }
            showBack={[
              "exam-results",
              "tutoring-records",
              "homework-details",
              "recitation-details",
              "edit-profile",
              "notifications",
              "student-details",
              "about",
              "chat",
              "announcements",
              "weekly-reports",
              "group-scores",
            ].includes(currentPage)}
            onBack={() => {
              if (["exam-results", "tutoring-records"].includes(currentPage)) {
                setCurrentPage("analytics");
              } else if (
                [
                  "edit-profile",
                  "notifications",
                  "student-details",
                  "about",
                ].includes(currentPage)
              ) {
                setCurrentPage("profile");
              } else if (["chat", "weekly-reports"].includes(currentPage)) {
                setCurrentPage("messages");
              } else {
                setCurrentPage("home");
              }
            }}
          />
        )}
        <AnimatePresence>
          {showNav && (
            <Navigation
              key="navigation"
              currentPage={currentPage}
              setPage={setCurrentPage}
            />
          )}
          {currentPage === "chat" && <ChatBottomBar key="chat-bottom-bar" />}
        </AnimatePresence>

        <main className="flex-1 w-full overflow-x-hidden overflow-y-auto relative no-scrollbar">
          <AnimatePresence mode="wait">
            {currentPage === "login" && (
              <Login key="login" setPage={setCurrentPage} />
            )}
            {currentPage === "bind-child" && (
              <BindChild key="bind-child" setPage={setCurrentPage} />
            )}
            {currentPage === "home" && (
              <Home key="home" setPage={setCurrentPage} />
            )}
            {currentPage === "analytics" && (
              <Analytics key="analytics" setPage={setCurrentPage} />
            )}
            {currentPage === "exam-results" && (
              <ExamResults key="exam-results" setPage={setCurrentPage} />
            )}
            {currentPage === "tutoring-records" && (
              <TutoringRecords
                key="tutoring-records"
                setPage={setCurrentPage}
              />
            )}
            {currentPage === "homework-details" && (
              <HomeworkDetails
                key="homework-details"
                setPage={setCurrentPage}
              />
            )}
            {currentPage === "recitation-details" && (
              <RecitationDetails
                key="recitation-details"
                setPage={setCurrentPage}
              />
            )}
            {currentPage === "messages" && (
              <Messages key="messages" setPage={setCurrentPage} />
            )}
            {currentPage === "profile" && (
              <Profile key="profile" setPage={setCurrentPage} />
            )}
            {currentPage === "edit-profile" && (
              <EditProfile key="edit-profile" setPage={setCurrentPage} />
            )}
            {currentPage === "notifications" && (
              <Notifications key="notifications" setPage={setCurrentPage} />
            )}
            {currentPage === "student-details" && (
              <StudentDetails key="student-details" setPage={setCurrentPage} />
            )}
            {currentPage === "about" && (
              <About key="about" setPage={setCurrentPage} />
            )}
            {currentPage === "chat" && (
              <Chat key="chat" setPage={setCurrentPage} />
            )}
            {currentPage === "announcements" && (
              <Announcements key="announcements" setPage={setCurrentPage} />
            )}
            {currentPage === "weekly-reports" && (
              <WeeklyReports key="weekly-reports" setPage={setCurrentPage} />
            )}
            {currentPage === "group-scores" && (
              <GroupScores key="group-scores" setPage={setCurrentPage} />
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
