import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
// icon verified
import { VscVerified } from "react-icons/vsc";

interface CourseDetailSection {
  title: string;
  items: string[];
}

export interface CourseDetail {
  intro: string;
  learningTitle: string;
  sections: CourseDetailSection[];
  certificateNote: string;
}

interface CourseDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
  detail: CourseDetail | null;
  onEnroll?: (courseTitle: string) => void;
}

const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  isOpen,
  onClose,
  courseTitle,
  detail,
}) => {
  // const handleEnroll = React.useCallback(() => {
  //   if (onEnroll) {
  //     onEnroll(courseTitle);
  //   }
  // }, [onEnroll, courseTitle]);

  return (
    <AnimatePresence>
      {isOpen && detail && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-[998]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 flex items-center justify-center z-[9999] p-4"
          >
            <div className="bg-white rounded-3xl w-full max-w-2xl relative max-h-[90vh] flex flex-col shadow-2xl">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-2xl font-bold text-black hover:text-gray-600 transition"
                aria-label="Cerrar modal de detalle de curso"
              >
                ×
              </button>

              <div className="px-10 pt-12 pb-6">
                {/* <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-500 mb-2">
                  Curso especializado+
                </p> */}
                <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-gray-900 leading-tight mb-4 pr-10">
                  {courseTitle}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed pr-10">
                  {detail.intro}
                </p>
              </div>

              <div className="px-10 pb-8 overflow-y-auto modal-scroll">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-base sm:text-xl font-heading font-semibold text-gray-900 mb-4">
                      {detail.learningTitle}
                    </h3>
                    <div className="space-y-6">
                      {detail.sections.map((section) => (
                        <div key={section.title} className="space-y-3">
                          <h4 className="text-sm sm:text-base font-semibold text-gray-800 uppercase tracking-wide">
                            {section.title}
                          </h4>
                          <hr className="boder-2 border-[#923840]" />
                          <ul className="list-disc list-inside space-y-2 text-gray-600 text-xs sm:text-sm leading-relaxed">
                            {section.items.map((item) => (
                              <li key={item} className="text-xs sm:text-sm">{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-2">
                    <div className="text-sm sm:text-base font-semibold text-gray-800 uppercase tracking-wide">
                      Certificado
                    </div>
                    <div className="border border-black rounded-2xl p-2 sm:p-4 text-sm leading-relaxed">
                      <div className="flex items-center gap-4">
                        <VscVerified className="h-[6rem] sm:h-[5rem] w-[6rem] sm:w-[5rem] text-primary-500" />
                        <p className="text-xs sm:text-sm">{detail.certificateNote}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* {onEnroll && (
                <div className="px-10 pb-10 pt-4 flex justify-end gap-3">
                  <button
                    onClick={onClose}
                    className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition"
                  >
                    Cerrar
                  </button>
                  <button
                    onClick={handleEnroll}
                    className="px-8 py-3 rounded-full bg-gradient-to-r from-[#AB323D] to-[#E1525F] text-white font-semibold hover:opacity-90 transition"
                  >
                    Inscríbete
                  </button>
                </div>
              )} */}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CourseDetailModal;

