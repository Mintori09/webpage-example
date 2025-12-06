"use client"; // Client component vì có interaction

import { Button } from "@/components/ui/button";
import { followUserAction } from "../action";

const AUTHORS = [
    { id: "1", name: "Alex Johnson", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMwQd0rQtrEcEYvqLxesK5M5dpa9MDXoPDW-Vr_RHhMje2NK_pCVoYDwmkIAhKTzSqwKMaQBtq28k1R4hhw9RvrYvJ7s9zg9J1bdfNlU54v5NbjhpoIo7UTqyMz8Xo-b_I0M9TpQcFhlVq-YDR_xDjEycbxgdJ2g_LgSJnfhKv_2ip2cudOx9seZ3oPKj-AC7tXrHvP5TGiaeqtUzt7_npEMKPmQ4_bJr8e-mBnhnQzWMz2luM9o7ktDzf-BIn0kfUkjzXERT5tr4g" },
    { id: "2", name: "Maria Garcia", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDV0jEqK0nvr4PhniJXcHqQJPRPArBKmm20g9tuGPfSEota_mUI8knoxV4B15TjhNoE3PT06QnZpxm0cl4fRUQ_9dvtwfIwKuuuwOI46scyIq3PYwuwieLmIxdi2svD26qZlNSFIpq_yQwVPORFoEJ4owEkgVoyu6VkiNgnccosw30klFlASyR-eTrPg99BXFznt1gpgLrjOqA8VYOIERvgXW3bQ0xSludf9kQDIT-SSw-oXwGthT3mtEbrBnlLUFXVW302c1S8N3Bt" },
    { id: "3", name: "Chris Lee", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuYT_dyL7FXd4ax7ffpGfhglis9dJMsv7q9tZRDao0e6EIxsuqO_yotDB7EtmTMR3E8W98-ghhxvjHVfef5OoQipR-LyWBcCBUSc0M-fTIc58baBVV1cCbU_JxNSh1xQsVQlgxrHz1lwQfihOGqNAjq5JFrpzm-vM9eCbuxux_gW2rJuWZIlKLNq9dzFV-4w_at62VLS58T2B8weBqTfNQLDoIU3RxiVJQjRgT8gWGSIDXRxw8dL21esBeZUL86T4tI-XL1bTL1fBA" },
];

export function SuggestedAuthors() {
    return (
        <div>
            <h4 className="text-base font-bold text-[#1A1A1A] dark:text-white mb-4">Top Authors</h4>
            <div className="flex flex-col gap-4">
                {AUTHORS.map((author) => (
                    <div key={author.id} className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <img alt={author.name} className="w-10 h-10 rounded-full" src={author.avatar} />
                            <p className="text-base font-medium text-[#1A1A1A] dark:text-gray-200">{author.name}</p>
                        </div>
                        <form action={async () => {
                            await followUserAction(author.id);
                            alert(`Followed ${author.name}`);
                        }}>
                            <Button variant="outline" rounded="full" className="h-8 px-4 text-sm">Follow</Button>
                        </form>
                    </div>
                ))}
            </div>
        </div>
    );
}
