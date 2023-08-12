const TextArea = ({
    role,
    name,
    bio,
}: {
    role: string;
    name: string;
    bio: string;
}) => {
    return (
        <div className="my-0 mx-auto py-[32px] text-center text-[0px] md:max-w-[458px]">
            <small className="not-italic font-normal leading-normal text-center uppercase opacity-[0.4951] text-[16px] md:text-[24px]">
                {role}
            </small>
            <h4 className="text-[24px] not-italic font-normal leading-normal uppercase mt-[8px] mb-[16px] md:text-[40px]">
                {name}
            </h4>
            <p className="text-light-purple barlow text-[15px] not-italic font-normal leading-[25px] md:text-[16px] md:leading-[28px]">
                {bio}
            </p>
        </div>
    );
};

export default TextArea;
