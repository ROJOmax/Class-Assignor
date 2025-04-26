import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      {/* Authentication required for this routes */}
      <Route element={<ProtectedRoute />} />
      <Route element={<Layout />}>
        {/* Admin Route */}
        <Route path="/admin/accounts" element={<AdminAccountsPage />} />
        <Route path="/admin/modules" element={<AdminModulesPage />} />
        <Route path="admin/section" element={<AdminSectionPage />} />
        <Route path="admin/auditlog" element={<AdminAuditLogPage />} />

        <Route path="/statistics" element={<StatisticsPage />} />

        {/* Responsable Routes */}
        <Route
          path="/responsible/preferences"
          element={<ResponsiblePreferencesPage />}
        />
        <Route
          path="/responsible/assignments"
          element={<ResponsibleAssignmnetsPage />}
        />
        <Route
          path="responsible/appeals"
          element={<ResponsibleAppealsPage />}
        />

        {/* Teacher Routes */}
        <Route
          path="/teacher/preferences"
          element={<TeacherPreferencesPage />}
        />
        <Route
          path="/teacher/assignments"
          element={<TeacherAssignmnetsPage />}
        />
        <Route path="teacher/appeals" element={<TeacherAppealsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
